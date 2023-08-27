// !Dependencies

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");
const webp = require("gulp-webp");
const mozjpeg = require("imagemin-mozjpeg");
const browserSync = require("browser-sync").create(); // Import browser-sync
const bsConfig = require("./bs-config");
const { exec } = require("child_process");
// const del = require("del");
// const yargs = require("yargs");

const SKIP_WEBP = process.argv.includes("--original");

const paths = {
  to: "dist",
  styles: {
    src: "src/scss/style.scss",
    to: "dist/css",
  },
  images: {
    src: "src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    to: "dist/images",
  },
  scripts: {
    src: ["src/js/bundle.js"],
    to: "dist/js",
  },
  otherFiles: [
    "src/**/*",
    "!src/{images,js,scss}",
    "!src/{images,js,scss}/**/*",
  ],
  watch: {
    styles: "src/scss/**/*.scss",
    scripts: "src/js/**/*.js",
    markup: "*.(html|php)",
  },
};

// !Task for running the build script
function build(callback) {
  exec("npm run build", (error, stdout, stderr) => {
    if (error) {
      console.error(`Build script error: ${error}`);
    }
    console.log(stdout);
    console.error(stderr);
    callback();
  });
}

// !Functions
//*SCSS
function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass().on("error", sass.logError)) // Log the error in the terminal
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

//*JavaScript
function jsmin() {
  return src("src/js/*.js")
    .pipe(terser())
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
}

// !Images
// *Optimize Images

async function optimizeimg() {
  const imagemin = await import("gulp-imagemin");

  console.log("original");
  return src("src/img/*.{jpg,jpeg,png}")
    .pipe(imagemin.default([mozjpeg({ quality: 80, progressive: true })]))
    .pipe(dest("dist/img"))
    .pipe(browserSync.stream());
}

// *Webp Images
function webpImage() {
  console.log("webp");
  return src("src/img/*.{jpg, jpeg, png}") // Use * to match all extensions
    .pipe(webp()) // Use the correct function name: webp()
    .pipe(dest("dist/img"))
    .pipe(browserSync.stream());
}

const imageTask = SKIP_WEBP ? optimizeimg : webpImage;

// const clean = () => del(paths.to);

// !Watchtask
function liteServer() {
  browserSync.init({
    injectChanges: true,
    server: {
      baseDir: "./dist", //Serve files from the dist directory
    },
    port: 3000, // use port 3000
    ...bsConfig, // spread operator used to merge in the options object.
    // notify: false // disable browserSync notifications
  });

  watch("src/scss/**/*.scss", compilescss).on("change", browserSync.reload);
  // * Watch JS Files to trigger build from webpack
  watch("src/js/**/*.js", { ignoreInitial: false }, function (cb) {
    build(() => {
      cb();
      // jsmin();
    });
  }).on("change", browserSync.reload);
  watch("src/images/**/*.{jpg,png}", series(optimizeimg, webpImage))
    .on("add", optimizeimg)
    .on("change", browserSync.reload);
  watch("**/*.html").on("change", browserSync.reload);
}

// !Gulp
// * Runs all four automatically
exports.default = series(
  // clean,
  parallel(compilescss, jsmin, imageTask),
  // serve
  liteServer
);
