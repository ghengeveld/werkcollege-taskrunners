// Load dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');

gulp.task('sass', function() {
  return gulp.src('src/styles/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles'));
});

gulp.task('clean', function() {
  return gulp.src('src/styles/app.css', { read: false })
    .pipe(clean());
});

gulp.task('clean-dist', function() {
  return gulp.src('dist/*', { read: false })
    .pipe(clean());
});

gulp.task('styles', ['sass'], function() {
  return gulp.src('src/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function(){
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean-dist', 'styles', 'scripts', 'html']);
