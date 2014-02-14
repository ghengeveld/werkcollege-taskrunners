// Load dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/styles/app.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles'));
});
