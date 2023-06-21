document.addEventListener('DOMContentLoaded', function() {
  const UimagesContainer = document.querySelector("#Uimages");
  const WimagesContainer = document.querySelector("#Wimages");
  const webpImages = [];
  const downloadButton = document.querySelector("#downloadButton");
  const inputElement = document.getElementById('userImage');
  let imagesProcessed = 0;

  const convertImages = function(event) {
    if (event.target.files.length > 0) {
      // Slider Value
      const slider = document.getElementById('slider');
      const sliderValue = parseFloat(slider.value);

      for (let i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i];
        let src = URL.createObjectURL(file);

        // Show original image
        let originalImage = document.createElement('img');
        originalImage.src = src;
        originalImage.setAttribute('data-index', i); // Set the image index as a data attribute
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

              // Store WebP image data with original filename
              const originalFilename = file.name;
              const webpFilename = getWebpFilename(originalFilename);
              const imageIndex = parseInt(originalImage.getAttribute('data-index')); // get the image index from the data-index attribute

              // Store WebP image data
              webpImages[imageIndex] = { name: originalFilename, data: webpImage, filename: webpFilename };

              imagesProcessed++; // Increment the processed image count.

              // Check to ensure all images have been uploaded and converted
              if (imagesProcessed === event.target.files.length) {
                renderWebpImages();
                downloadButton.style.display = 'block';
              }
            };
            reader.readAsDataURL(blob);
          }, 'image/webp', sliderValue);
        };
      }
    }
  };

  // Update the slider value display
  const slider = document.getElementById('slider');
  const sliderValueDisplay = document.getElementById('sliderValue');
  slider.addEventListener('input', function() {
    sliderValueDisplay.textContent = this.value;
  });

  function getWebpFilename(originalFilename) {
    const extensionIndex = originalFilename.lastIndexOf('.');
    const filename = originalFilename.substring(0, extensionIndex);
    return filename + '.webp';
  }

  function renderWebpImages() {
    // Clear the existing images
    WimagesContainer.innerHTML = '';

    // Render WebP images in order
    for (let i = 0; i < webpImages.length; i++) {
      const { name, data } = webpImages[i];

      // Show WebP image
      let convertedImage = document.createElement('img');
      convertedImage.src = data;
      convertedImage.alt = name; // Set the alt attribute to the original filename
      WimagesContainer.appendChild(convertedImage);
    }
    // hide slider after conversion
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.display = 'none';
  }

  const downloadImages = function() {
    if (webpImages.length > 0) {
      if (downloadButton.getAttribute('data-single-file') === 'true') {
        // Download single file
        const { name, data } = webpImages[0];
        const fileName = getWebpFilename(name);
        const downloadLink = document.createElement('a');
        downloadLink.href = data;
        downloadLink.download = fileName;
        downloadLink.click();
      } else {
      
        const zip = new JSZip();

        for (let i = 0; i < webpImages.length; i++) {
          const { name, data } = webpImages[i];
          const fileName = getWebpFilename(name); // Use the original filename for the WebP file

          zip.file(fileName, data.split(',')[1], { base64: true });
        }

        zip.generateAsync({ type: 'blob' }).then(function(content) {
          const downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = 'webp_images.zip';
          downloadLink.click();
        });
      }
    }
  };

  inputElement.addEventListener('change', convertImages);
  downloadButton.addEventListener('click', downloadImages);
});
