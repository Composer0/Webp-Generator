# OZ Starter Theme
![OZ Starter Theme version 1.0.0](https://img.shields.io/badge/version-1.0.0-85BA39.svg)

## Coding Standards
This theme will require you to following the <a href="https://codex.wordpress.org/WordPress_Coding_Standards">WordPress coding standards</a> for PHP, HTML and JavaScript.

## Building the Theme
Be sure to read the prerequisites below if this is the first time using this theme.
1. CD into the theme folder and run `npm run init`.

There you go, everything should be installed and ready to go!
Start developing with [SASS](https://sass-lang.com/documentation), [SourceMapping](https://www.schneems.com/2017/11/14/wtf-is-a-source-map/) and [BrowserSync](https://browsersync.io/):
```sh
npm run dev
```
Before pushing any final JS or CSS to production, be sure to run the following to minify those files. if the site is still in development, there is no need to run this. this will also remove the SourceMapping.
```sh
npm run build
```

## Prerequisites
If this is the first project with the latest version of the theme, you may need to install a few things to make sure your local system is setup properly.

### Requirements
- PHP 7.0
- npm and node
- <a href="https://brew.sh/">Homebrew</a> (optional)

### PHP
If you are on a Mac, you should already have PHP 7 or higher.

### npm
If you are not sure weather you have npm and node installed, you can try the command `node -v` and `npm -v`. if both are installed, you are good to go. if not, one of the easiest ways to get those up and running is to install it directly from [their website](https://nodejs.org/en/download/).

After you have Homebrew, you can simply run `brew update` and then `brew install node`. Be sure to double check by running those tests mentioned earlier. You may need to restart your terminal as well.
