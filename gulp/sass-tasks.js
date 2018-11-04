'use strict';

const cssLib = require('../index');

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

function sassBuild() {
  return gulp.src(cssLib.dirs.src + '/vanilla.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(cssLib.dirs.dist));
}
sassBuild.displayName = 'sass:build';


function sassWatch() {
  return gulp.watch( '**/*.scss', {cwd: cssLib.dirs.src}, sassBuild);
}
sassWatch.displayName = 'sass:watch';

module.exports = {
  sassBuild,
  sassWatch
};
