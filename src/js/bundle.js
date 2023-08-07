import "./parts/comparison-slider"
import "regenerator-runtime/runtime";

document.addEventListener('DOMContentLoaded', function() {
  const webpImages = [];
  const downloadButtonSingle = document.querySelector("#downloadButtonSingle");
  const downloadButtonMultiple = document.querySelector("#downloadButtonMultiple");
  const inputElement = document.getElementById('imageUploadButton');
  let imagesProcessed = 0;
  const imageElements = []; // *Array to store original and converted image elements
  let isImageProcessing = false;

  const convertImages = function(event) {
    if (isImageProcessing) {
      console.log("Ongoing image processing. Please wait...");
      return;
    }
  
    if (event.target.files.length > 0) {
      // Reset webpImages array
      webpImages.length = 0;
      imagesProcessed = 0;
      isImageProcessing = true;
  
      // Slider Value
      let sliderValue = parseFloat(document.getElementById('slider').value); // Default value for the slider
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
  
        // Create image element to store the original image
        let originalImage = new Image();
        originalImage.src = URL.createObjectURL(file);
  
        // Store image and data span elements in the object with the same identifiers
        imageElements[i] = {
          originalDataSize,
          convertedImage,
          convertedDataSize,
          originalImage, // Store the original image element
          originalImageURL: null,
          webpImageURL: null, // This will be updated once we have the image processed.
          imageIndex: i,
        };
        console.log("Original Data Size for image", i, ":", imageElements[i].originalDataSize);
  
        // Process image and update elements
        processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, document.getElementById('popup-card'), i);
      }
    }
  };

  // !Process Image
   function processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, popup, imageIndex) {
    const startTime = performance.now();
    console.log('processing image: ', file)
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    let originalImage = new Image();
    originalImage.src = URL.createObjectURL(file);

    originalImage.onload = function() {
      canvas.width = originalImage.width;
      canvas.height = originalImage.height;
      ctx.drawImage(originalImage, 0, 0);

      // *Convert canvas to WebP
      canvas.toBlob(
        function(blob) {
          //Calculate the file size of the WebP Image
          const fileSizeKB = blob.size / 1024;
          
          const reader = new FileReader();
          reader.onloadend = function() {
            const webpImage = reader.result;
            
            // Update webp image elements.
            // const imageIndex = imagesProcessed++;
            // const dataIndex = imageElements[imageIndex].dataIndex;
            convertedImage.dataset.index = imageIndex;
            
            
            
            imageElements[imageIndex].originalImageURL = originalImage; 
            imageElements[imageIndex].webpImageURL = webpImage; //Store the converted WebP image URL here
            
            // *Update file size elements and converted image data
            originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
            convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
            convertedImage.src = webpImage;
            
            // *Store WebP image data with original filename
            const originalFilename = file.name;
            const webpFilename = getWebpFilename(originalFilename);
            webpImages.push({
              name: originalFilename,
              data: webpImage,
              originalBlob: file, //Store the original image blob for render purposes
            });
            imageElements[imageIndex].originalFilename = originalFilename;
            // imagesProcessed++; // *get the image index from the imagesProcessed counter
            imagesProcessed++;

            convertedImage.dataset.index = imageIndex;
            imageElements[imageIndex].originalImageURL = originalImage;
            imageElements[imageIndex].webpImageURL = webpImage;
          
            // *Store WebP image data
            webpImages[imageIndex] = { name: originalFilename, data: webpImage, filename: webpFilename, originalBlob:file };
            console.log(webpImages)

            
            // *Check to ensure all images have been uploaded and converted
            if (imagesProcessed === event.target.files.length) {
              renderWebpImages();
              console.log(renderWebpImages())
              
              if (imagesProcessed === 1) {
                console.log("Number of files uploaded:", imagesProcessed);
                downloadButtonSingle.style.display = 'block';
                downloadButtonMultiple.style.display = 'none';
              } else {
                downloadButtonSingle.style.display = 'none';
                downloadButtonMultiple.style.display = 'block';
            }
          }
          const endTime = performance.now();
          const processingTime = endTime - startTime;
          console.log('Processing time:', processingTime);
          // isImageProcessing = false;
        };
        reader.readAsDataURL(blob);
      }, 'image/webp', sliderValue);
    };
    // const originalImageURL = URL.createObjectURL(file);
    // await new Promise((resolve) => {
    //   const interval = setInterval(() => {
    //     if (originalImageURL) {
    //       clearInterval(interval);
    //       resolve();
    //     }
    //   }, 50);
    // })
  }

  // *Update the slider value display
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


  // !Render Webp images and data
  function renderWebpImages() {
  
    // Sort the imageElements array based on the originalImageURL property
    // imageElements.sort((a, b) => {
    //   return a.originalImageURL.src.localeCompare(b.originalImageURL.src);
    // });

    // webpImages.sort((a, b) => {
    //   return a.name.localeCompare(b.name);
    // });

    const matchedArray = webpImages.map((webpImage, index) => ({
      ...webpImage,
      ...imageElements[index]
    }));
    console.log(matchedArray);

    

    // *Clear the existing images
    const streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = '';
    console.log('is running');
    
    // *Render WebP images in order
    for (let i = 0; i < webpImages.length; i++) {
      const { name, data, filename, originalImageURL, originalBlob, originalDataSize, convertedImage, convertedDataSize } = matchedArray[i];
      // const {  } = imageElements[i];

      if (convertedImage && originalDataSize && convertedDataSize) {
        const startTimeRendering = performance.now();
        console.log('rendering webp: ', filename)
      
        // *Create a div to hold each image's content
        const fileWrapper = document.createElement('div');
        fileWrapper.classList.add('file-wrapper');
        
        // *Show file name
        const fileNameElement = document.createElement('p');
        const fileNameText = document.createTextNode('File Name:' + ' ');
        // *const brElement = document.createElement('br');
        const filenameText = document.createTextNode(filename);

        fileNameElement.appendChild(fileNameText);
        // *fileNameElement.appendChild(brElement);
        fileNameElement.appendChild(filenameText);
    
        fileNameElement.classList.add('filename-wrapper');
        fileWrapper.appendChild(fileNameElement);

        const fileWrapperRow = document.createElement('div');
        fileWrapperRow.classList.add('file-wrapper-row')

        // *Show WebP image
        convertedImage.src = data;
        convertedImage.alt = name; // *Set the alt attribute to the original filename
        fileWrapperRow.appendChild(convertedImage);

      
        // *Show file sizes
        const originalFileSize = document.createElement('p');
        originalFileSize.innerText = originalDataSize.innerText;
        originalFileSize.classList.add('data-wrapper');
        fileWrapperRow.appendChild(originalFileSize);
        
        const convertedFileSize = document.createElement('p');
        convertedFileSize.innerText = convertedDataSize.innerText;
        convertedFileSize.classList.add('data-wrapper');
        fileWrapperRow.appendChild(convertedFileSize);


        // *Create a Comparison Button
        const popup = document.getElementById('popup-card');
        const comparisonButton = document.createElement('button');
        comparisonButton.classList.add('compare-button');
        
        const comparisonButtonContainer = document.createElement('a');
        comparisonButtonContainer.classList.add('compare-button');
        
        
        const comparisonButtonIcon = document.createElement('i');
        comparisonButtonIcon.classList.add('fas', 'fa-info-circle');
        comparisonButtonIcon.dataset.index = i; // Set data-index attribute directly

        comparisonButtonContainer.appendChild(comparisonButtonIcon);


        comparisonButtonIcon.addEventListener("click", (e) => {
          const imagesContainer = document.getElementById('image-container');
          const beforeImage = imagesContainer.querySelector('.image-before');
          const afterImage = imagesContainer.querySelector('.image-after');

          if (beforeImage && afterImage) {
            imagesContainer.removeChild(beforeImage);
            imagesContainer.removeChild(afterImage);
          } else {
            // Use e.target to get the element that triggered the event
            const dataIndex = e.target.dataset.index; // Access the data-index directly

            const originalImageElement = document.createElement('img');
            originalImageElement.classList.add('image-before');
            originalImageElement.alt = 'original image';
            // originalImageElement.src = matchedArray[dataIndex].originalImageURL;
            // originalImageElement.src = matchedArray[dataIndex].originalBlob;
            originalImageElement.src = URL.createObjectURL(matchedArray[dataIndex].originalBlob);

            imagesContainer.appendChild(originalImageElement);

            const convertedImageElement = document.createElement('img');
            convertedImageElement.classList.add('image-after');
            convertedImageElement.alt = 'converted image';
            // convertedImageElement.src = matchedArray[dataIndex].data;
            convertedImageElement.src = data;
            imagesContainer.appendChild(convertedImageElement);

            popup.classList.remove('hide');
            popup.classList.add('show');
          }
        });
        fileWrapperRow.appendChild(comparisonButtonContainer);

    
        // *Create a button for individual download
        const downloadButtonContainer = document.createElement('div');
        downloadButtonContainer.classList.add('single-download');
        const downloadButtonIcon = document.createElement('i');
        // downloadButton.innerText = 'Download';
        downloadButtonIcon.classList.add('fas', 'fa-download');
        
        downloadButtonContainer.addEventListener('click', function () {
          downloadWebpImage(data, name);
        });
        downloadButtonContainer.appendChild(downloadButtonIcon);
        fileWrapperRow.appendChild(downloadButtonContainer);
      
        // *Add the image content to the streamline container
        streamlineContainer.appendChild(fileWrapper);
        streamlineContainer.appendChild(fileWrapperRow);

        const endTimeRendering = performance.now();
        const processingTimeRendering = endTimeRendering - startTimeRendering;
        console.log('Rendering time:', processingTimeRendering);
      } else {
  
        console.log(`Skipping rendering for image ${i} due to missing elements`) 
        // *Hide slider after conversion
      }
      }
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
      downloadLink.download = filename.replace(/\.[^/.]+$/, "") + ".webp"; // *Remove the file extension and add .webp
      downloadLink.click();
    } catch (error) {
      console.error('Error downloading image', error);
    }
  }

  const downloadImages = function() {
    if (webpImages.length > 0) {
      if (downloadButtonSingle.style.display === 'block') {
        // *Download single file
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
          const fileName = getWebpFilename(name); // *Use the original filename for the WebP file

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
