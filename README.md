# WebP Image Converter

This JavaScript script provides a simple web application for converting uploaded images to the WebP format. The converted images can then be downloaded as a ZIP file.

## Usage

1. Include the script in your HTML file:

   ```html
   <script src="script.js"></script>
   ```

2. Create the necessary HTML elements in your markup:

   ```html
   <input type="file" id="userImage">
   <div id="Uimages"></div>
   <div id="Wimages"></div>
   <button id="downloadButton" style="display: none;">Download WebP Images</button>
   ```

3. Initialize the image conversion functionality:

   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
       // Code from the script.js file
   });
   ```

## Functionality

The script attaches event listeners to the file input element and the download button to handle the image conversion and download processes.

When a user selects one or multiple images using the file input, the script processes each image sequentially. It performs the following steps for each image:

1. Displays the original image on the page.
2. Converts the image to the WebP format using the HTML5 canvas element.
3. Displays the converted WebP image on the page.
4. Stores the WebP image data in an array.

Once all images have been processed, the download button becomes visible. Clicking the download button creates a ZIP file containing all the converted WebP images. The file is then automatically downloaded to the user's device.

## Dependencies

This script relies on the following libraries:

- [JSZip](https://stuk.github.io/jszip/): A JavaScript library for creating ZIP files.

Make sure to include the JSZip library in your HTML file before including the script.js file:

```html
<script src="jszip.min.js"></script>
<script src="script.js"></script>
```

## Compatibility

This script utilizes modern JavaScript features and HTML5 capabilities. Ensure that your target browsers support the following features:

- [HTML5 File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications)
- [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

It is recommended to test the functionality on various browsers to ensure compatibility.

## License

This script is licensed under the MIT License. You are free to use, modify, and distribute it in your projects. Refer to the [LICENSE](LICENSE) file for more information.
