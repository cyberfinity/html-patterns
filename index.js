'use strict';

const srcRoot = __dirname + '/src';
const distRoot = __dirname + '/dist';
const sgDist = __dirname + '/dist-sg';

const pkg = require('./package.json');

module.exports = {

  name: pkg.name,

  dirs: {
    src: srcRoot,
    dist: distRoot,

    // Style guide source folders
    sgSrc: {
      components: srcRoot + '/components',
      docs: srcRoot + '/docs'
    },


    // Style guide static build output
    sgDist: sgDist
  },

  version: pkg.version

};
