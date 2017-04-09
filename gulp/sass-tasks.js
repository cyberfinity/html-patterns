'use strict';

const cssLib = require('../index');

const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function(gulp){

  // Register sass build task
  gulp.task('sass:build', function(){
    return gulp.src(cssLib.dirs.src + '/vanilla.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(cssLib.dirs.dist));
  });


  // Register watch task
  gulp.task('sass:watch', function(){
    return gulp.watch( '**/*.scss', {cwd: cssLib.dirs.src}, ['sass:build']);
  })

};
