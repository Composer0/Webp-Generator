import "regenerator-runtime/runtime";

document.addEventListener('DOMContentLoaded', function() {
  const webpImages = [];
  const downloadButtonSingle = document.querySelector("#downloadButtonSingle");
  const downloadButtonMultiple = document.querySelector("#downloadButtonMultiple");
  const inputElement = document.getElementById('userImage');
  let imagesProcessed = 0;
  const imageElements = []; // Array to store original and converted image elements

  const convertImages = function(event) {
    if (event.target.files.length > 0) {
      // Reset webpImages array
      webpImages.length = 0;
      imagesProcessed = 0;

      // Slider Value
      let sliderValue = 0.75; // Default value for the slider
      const slider = document.getElementById('slider');
      const sliderValueDisplay = document.getElementById('sliderValue');
      slider.addEventListener('input', function() {
        sliderValue = parseFloat(this.value);
        sliderValueDisplay.textContent = sliderValue;
      });

      for (let i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i];

        // Create elements for file sizes and converted image data
        let originalDataSize = document.createElement('span');
        let convertedImage = document.createElement('img');
        convertedImage.classList.add('webp-image');
        let convertedDataSize = document.createElement('span');

        // Store image and data span elements in the object with the same identifiers
        imageElements[i] = {
          originalDataSize,
          convertedImage,
          convertedDataSize,
        };

        // Process image and update elements
        processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue);
      }
    }
  };

  function processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue) {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    let userImage = new Image();
    userImage.src = URL.createObjectURL(file);

    userImage.onload = function() {
      canvas.width = userImage.width;
      canvas.height = userImage.height;
      ctx.drawImage(userImage, 0, 0);

      // Convert canvas to WebP
      canvas.toBlob(
        function(blob) {
          //Calculate the file size of the WebP Image
          const fileSizeKB = blob.size / 1024;

        const reader = new FileReader();
        reader.onloadend = function() {
          const webpImage = reader.result;

          // Update file size elements and converted image data
          originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
          convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
          convertedImage.src = webpImage;

          // Store WebP image data with original filename
          const originalFilename = file.name;
          const webpFilename = getWebpFilename(originalFilename);
          const imageIndex = imagesProcessed++; // get the image index from the imagesProcessed counter

          // Store WebP image data
          webpImages[imageIndex] = { name: originalFilename, data: webpImage, filename: webpFilename };

          // Check to ensure all images have been uploaded and converted
          if (imagesProcessed === event.target.files.length) {
            renderWebpImages();
            console.log(renderWebpImages())
            if (event.target.files.length === 1) {
              downloadButtonSingle.style.display = 'block';
              downloadButtonMultiple.style.display = 'none';
            } else {
              downloadButtonSingle.style.display = 'none';
              downloadButtonMultiple.style.display = 'block';
            }
          }
        };
        reader.readAsDataURL(blob);
      }, 'image/webp', sliderValue);
    };
  }

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
    const streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = '';
    console.log('is running');
    
    // Render WebP images in order
    for (let i = 0; i < webpImages.length; i++) {
      const { name, data, filename } = webpImages[i];
      const { originalDataSize, convertedImage, convertedDataSize } = imageElements[i];
    
      // Create a div to hold each image's content
      const fileWrapper = document.createElement('div');
      fileWrapper.classList.add('file-wrapper');
      
      // Show file name
      const fileNameElement = document.createElement('p');
      const fileNameText = document.createTextNode('File Name:' + ' ');
      // const brElement = document.createElement('br');
      const filenameText = document.createTextNode(filename);

      fileNameElement.appendChild(fileNameText);
      // fileNameElement.appendChild(brElement);
      fileNameElement.appendChild(filenameText);
  
      fileNameElement.classList.add('filename-wrapper');
      fileWrapper.appendChild(fileNameElement);

      const fileWrapperRow = document.createElement('div');
      fileWrapperRow.classList.add('file-wrapper-row')

      // Show WebP image
      convertedImage.src = data;
      convertedImage.alt = name; // Set the alt attribute to the original filename
      fileWrapperRow.appendChild(convertedImage);

  

    
      // Show file sizes
      const originalFileSize = document.createElement('p');
      originalFileSize.innerText = originalDataSize.innerText;
      originalFileSize.classList.add('data-wrapper');
      fileWrapperRow.appendChild(originalFileSize);
      
      const convertedFileSize = document.createElement('p');
      convertedFileSize.innerText = convertedDataSize.innerText;
      convertedFileSize.classList.add('data-wrapper');
      fileWrapperRow.appendChild(convertedFileSize);


    
      // Create a button for individual download
      const downloadButton = document.createElement('button');
      downloadButton.innerText = 'Download';
      downloadButton.classList.add('single-download');
      downloadButton.addEventListener('click', function () {
        downloadWebpImage(data, name);
      });
      fileWrapperRow.appendChild(downloadButton);
    
      // Add the image content to the streamline container
      streamlineContainer.appendChild(fileWrapper);
      streamlineContainer.appendChild(fileWrapperRow);
    }
    
    // hide slider after conversion
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.display = 'none';
  }
  

  
  async function downloadWebpImage(dataURI, filename) {
    try {
      const response = await fetch(dataURI);
      const blob = await response. blob();
      const url = URL.createObjectURL(blob);

      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = filename.replace(/\.[^/.]+$/, "") + ".webp"; // Remove the file extension and add .webp
      downloadLink.click();
    } catch (error) {
      console.error('Error downloading image', error);
    }
  }

  const downloadImages = function() {
    if (webpImages.length > 0) {
      if (downloadButtonSingle.style.display === 'block') {
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
  }

  inputElement.addEventListener('change', convertImages);
  downloadButtonSingle.addEventListener('click', downloadImages);
  downloadButtonMultiple.addEventListener('click', downloadImages);
});
