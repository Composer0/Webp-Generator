// script.js

document.addEventListener('DOMContentLoaded', function() {
    const UimagesContainer = document.querySelector("#Uimages");
    const WimagesContainer = document.querySelector("#Wimages");
    const webpImages = [];
    const downloadButton = document.querySelector("#downloadButton");
    const inputElement = document.getElementById('userImage');
    const convertImages = function(event) {
      if (event.target.files.length > 0) {
        // Show user images
  
        let imagesProcessed = 0;
  
        for (let i = 0; i < event.target.files.length; i++) {
          let file = event.target.files[i];
          let src = URL.createObjectURL(file);
  
          // Show original image
          let originalImage = document.createElement('img');
          originalImage.src = src;
          UimagesContainer.appendChild(originalImage);
  
          // Convert image to WebP
          let canvas = document.createElement('canvas');
          let ctx = canvas.getContext('2d');
  
          let userImage = new Image();
          userImage.src = src;
  
          userImage.onload = function() {
            canvas.width = userImage.width;
            canvas.height = userImage.height;
            ctx.drawImage(userImage, 0, 0);
  
            // Convert canvas to WebP
            canvas.toBlob(function(blob) {
              const reader = new FileReader();
              reader.onloadend = function() {
                const webpImage = reader.result;
  
                // Show WebP image
                let convertedImage = document.createElement('img');
                convertedImage.src = webpImage;
                WimagesContainer.appendChild(convertedImage);
  
                // Store WebP image data
                webpImages.push({ name: file.name, data: webpImage });
  
                imagesProcessed++; // Increment the processed image count.
  
                // Check to ensure all images have been uploaded and converted
                if (imagesProcessed === event.target.files.length) {
                  downloadButton.style.display = 'block';
                }
              };
              reader.readAsDataURL(blob);
            }, 'image/webp', 0.75);
          };
        }
      }
    };
  
    const downloadImages = function() {
      if (webpImages.length > 0) {
        const zip = new JSZip();
  
        for (let i = 0; i < webpImages.length; i++) {
          const { name, data } = webpImages[i];
          const fileName = `image${i + 1}.webp`;
  
          zip.file(fileName, data.split(',')[1], { base64: true });
        }
  
        zip.generateAsync({ type: 'blob' }).then(function(content) {
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = 'webp_images.zip';
          downloadLink.click();
        });
      }
    };
  
    inputElement.addEventListener('change', convertImages);
    downloadButton.addEventListener('click', downloadImages);
  });
  