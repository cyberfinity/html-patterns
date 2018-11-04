'use strict';

const cssLib = require('./index');

const gulp = require('gulp');
const del = require('del');

// Load SASS tasks
const sassTasks = require('./gulp/sass-tasks');

// Load Fractal tasks
const fractalTasks = require('./gulp/fractal-tasks');



// ========== LIB tasks =============

// Build entire library
const libBuild = sassTasks.sassBuild; // Only SASS for now, but more to come in due course!
libBuild.displayName = 'lib:build';

// Watch all library source files
// NOTE: This deliberately does NOT do an initial build
const libWatch = sassTasks.sassWatch;
libWatch.displayName = 'lib:watch';

// Clean library build output
function libClean(){
  return del([
    cssLib.dirs.dist + '/**/*'
  ]);
}
libClean.displayName = 'lib:clean';



// ========== Fractal static style guide tasks ===========

// Completely wipe contents of style guide dist dir
function sgClean(){
  return del([
    cssLib.dirs.sgDist + '/**/*'
  ]);
}
sgClean.displayName = 'sg:clean';


// ========== Composite tasks =============

// Clean ALL THE THINGS!
const clean = gulp.parallel(libClean, sgClean);

// Clean everything, build CSS lib and then build style guide
const sgBuild = gulp.series(clean, libBuild, fractalTasks.fractalBuild);
sgBuild.displayName = 'sg:build';

// Launch dev server
const serve = gulp.series(clean, libBuild, gulp.parallel(libWatch, fractalTasks.fractalStart));

// Clean only the library
const build = gulp.series(libClean, libBuild);


module.exports = {
  clean,
  serve,
  build,

  default: build
}
