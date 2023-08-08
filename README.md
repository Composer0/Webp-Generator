# WebP Image Converter

This is a web application that allows users to upload images, convert them to WebP format, and download the converted images. WebP is a modern image format that provides better compression and smaller file sizes compared to traditional image formats like JPEG and PNG.


## Prerequisites

To use this code, you need to have a basic understanding of JavaScript and HTML. Additionally, you'll need a web browser to execute the code.

## Getting Started

1. Clone this repository or download the JavaScript file.
2. Open the HTML file in a web browser to interact with the code.

## Usage

1. Open the HTML file in a web browser.
2. Adjust the slider to set the compression quality for the WebP format. This step must be completed before uploading images.
3. You can upload images using one of the following methods:
   - Click on the "Upload Images" button.
   - Drag and drop images onto the designated area.
4. Once images are uploaded, the conversion process will start automatically.
5. After the conversion is complete, you can see the original and converted images along with their sizes.
6. You can compare the original and converted images using the comparison button.
7. You can download individual converted images by clicking the download button next to each image.
8. If multiple images are converted, you can download them all as a ZIP file using the "Download All" button.


### Features

- Image upload: Select and upload multiple images from your local device.
- Compression control: Use the slider to adjust the level of compression applied during the conversion process.
- WebP conversion: Convert the uploaded images to the WebP format for reduced file sizes.
- Displays original and converted image sizes.
- Individual and bulk download: Download individual converted images or download all converted images in a zip file.


### How it Works

The application uses HTML, CSS, and JavaScript to handle image conversion and downloads. It leverages the `regenerator-runtime` library as a polyfill to provide support for `async/await` in environments where native support for generators is not available, ensuring broader compatibility for the application.


### Compatibility

The WebP Image Converter is designed to work on modern web browsers and devices. It utilizes `regenerator-runtime` to ensure support for `async/await` in various environments, enhancing the compatibility of the application.
