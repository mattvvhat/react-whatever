var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('jsx', function() {
  console.log("** jsx");
  return gulp.src('src/components/**.jsx')
             .pipe(react())
             .pipe(gulp.dest('./src/components/'));
});

gulp.task('scripts', function() {
  console.log("** scripts");
  return gulp.src('src/components/**.js')
             .pipe(babel())
             .pipe(uglify())
             .pipe(gulp.dest('./app/components/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('watch', function () {
  watch('src/**/*.js', function () {
    gulp.start('scripts');
  });
  watch('src/**/*.jsx', function () {
    gulp.start('jsx');
  });
});
 
// gulp.task('default', ['stream', 'connect']);
gulp.task('default', ['watch', 'connect']);
