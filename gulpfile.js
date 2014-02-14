// Load dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');

gulp.task('sass', function() {
  return gulp.src('src/styles/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles'));
});

gulp.task('clean', function() {
  return gulp.src('src/styles/app.css', { read: false })
    .pipe(clean());
});
