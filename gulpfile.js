'use strict';

const cssLib = require('./index');

const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const del = require('del');

// Load SASS tasks
require('./gulp/sass-tasks')(gulp);

// Load Fractal tasks
require('./gulp/fractal-tasks')(gulp);



// ========== LIB tasks =============

// Build entire library
gulp.task('lib:build', ['sass:build']); // Only SASS for now, but more to come in due course!

// Watch all library source files
// NOTE: This deliberately does NOT do an initial build
gulp.task('lib:watch', ['sass:watch']);

// Clean library build output
gulp.task('lib:clean', function(){
  return del([
    cssLib.dirs.dist + '/**/*'
  ]);
});



// ========== Fractal static style guide tasks ===========

// Clean everything, build CSS lib and then build style guide
gulp.task('sg:build', function(cb){
  gulpSequence('clean', 'lib:build', 'fractal:build', cb);
});

// Completely wipe contents of style guide dist dir
gulp.task('sg:clean', function(){
  return del([
    cssLib.dirs.sgDist + '/**/*'
  ]);
});


// ========== Composite tasks =============

// Clean ALL THE THINGS!
gulp.task('clean', ['lib:clean', 'sg:clean']);

// Launch dev server
gulp.task('serve', ['clean'], function(cb){
  // Now that we've got a clean slate, do a fresh
  // build of the library and THEN kick off the
  // watchers and Fractal server
  gulpSequence('lib:build', ['lib:watch', 'fractal:start'], cb);
});

// Clean only the library
gulp.task('build', ['lib:clean'], function(cb){
  gulpSequence('lib:build', cb);
});

// Default task is to build
gulp.task('default', ['build']);
