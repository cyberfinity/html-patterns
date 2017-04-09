# Cyberfinity vanilla UI library

A base set of UI components for [Cyberfinity](http://www.cyberfinity.net/) websites with some vanilla styling.

Additionally, this package can generate a living style guide to visualise and document the available UI components.

## Using this library

**TBC.** (Usage instructions for downstream projects that _consume_ this library's CSS files will go here)


## Development pre-requisites and setup

In order to work on this library and/or generate the style guide, you will need the following:

* [Node.js](https://nodejs.org/)

Once you have those, you can set up your local dev environment by running:

1. Fetch the source code: `git clone ...`
1. Install dependencies: `npm i`


## Running local dev server

For day to day development, your best bet is the local dev server. This will do the following:

1. Clean dist folders
1. Build CSS library
1. Launch Fractal web server
1. Begin watching source files for changes
    * Any changes should trigger an automatic update in your web browser so you get a live preview

To kick it all off, simply run:

* `npm start`


## Building CSS library

To build just the CSS library by itself from source, run:

* `npm run build`

This will generate a `dist/` folder containing the build output.


## Building the style guide

You can generate a static version of the style guide (suitable to be uploaded to a web server for sharing) by running:

* `npm run styleguide`

This will generate a `dist-sg/` folder containing the style guide and a copy of the CSS library.

Note, as a by-product, a `dist/` folder containing _only_ the CSS library will be generated as well. However, if you intend the host the style guide somewhere, there is no need to include this folder as a copy of its contents are also placed into `dist-sg/`.
