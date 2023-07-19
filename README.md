## WebP Image Converter

This is a web application that allows users to upload images, convert them to WebP format, and download the converted images. WebP is a modern image format that provides better compression and smaller file sizes compared to traditional image formats like JPEG and PNG.

### Features

- Image upload: Select and upload multiple images from your local device.
- Compression control: Use the slider to adjust the level of compression applied during the conversion process.
- WebP conversion: Convert the uploaded images to the WebP format for reduced file sizes.
- Individual and bulk download: Download individual converted images or download all converted images in a zip file.

### How it Works

The application uses HTML, CSS, and JavaScript to handle image conversion and downloads. It leverages the `regenerator-runtime` library as a polyfill to provide support for `async/await` in environments where native support for generators is not available, ensuring broader compatibility for the application.

### Usage

1. Access the web application using your web browser.
2. Click the "Choose File" button to select and upload one or more images.
3. Adjust the compression level using the slider to control the file size of the converted images (optional).
4. Click the "Convert" button to start the conversion process.
5. Once the images are converted, the application will display the original and converted file sizes, along with the images for comparison.
6. Individual download: Click the "Download" button next to each image to download the converted WebP image.
7. Bulk download: If multiple images are converted, the application will provide a "Download All" button to download all converted images in a zip file.

### Compatibility

The WebP Image Converter is designed to work on modern web browsers and devices. It utilizes `regenerator-runtime` to ensure support for `async/await` in various environments, enhancing the compatibility of the application.
