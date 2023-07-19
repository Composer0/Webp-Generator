# WebP Image Converter

This web application allows users to convert their uploaded images to WebP format and download them.

## Getting Started

To use the application, follow these steps:

1. Clone this repository to your local machine.

2. Open the `index.html` file in your web browser.

3. Click on the "Choose File" button to select an image file from your computer.

4. Adjust the compression rate using the slider to control the WebP image quality. The default value is 0.75, and you can slide to the left for less compression (higher quality) and slide to the right for more compression (lower quality).

5. Once an image is selected, the application will display the original file size and the converted WebP file size in kilobytes (KB).

6. The application will show the converted WebP image along with its file size information.

7. You can convert and view multiple images simultaneously, and the images will be displayed in order.

8. For each converted image, you can download the WebP file individually by clicking the "Download" button.

9. If you have multiple converted images, you can download them as a zip file by clicking the "Download All" button.

10. After conversion and download, the slider will be hidden.

## Technology Used

The application is built using HTML, CSS, and JavaScript. It utilizes the `canvas` element to process and convert the images to WebP format. The [`JSZip`](https://stuk.github.io/jszip/) library is used to create the zip file for multiple downloads.

The application uses the [`regenerator-runtime`](https://www.npmjs.com/package/regenerator-runtime) package to handle asynchronous operations with `async/await`.

## Note

Please note that the WebP format might not be fully supported in all web browsers. While it is supported in most modern browsers, some older versions may not display WebP images correctly.

## License

This project is licensed under the [MIT License](LICENSE).
