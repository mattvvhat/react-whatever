var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var react = require('gulp-react');

gulp.task('jsx', function() {
  return gulp.src('src/components/**.jsx')
             .pipe(react())
             .pipe(browserify())
             .pipe(gulp.dest('app/components/'));
});

gulp.task('scripts', function() {
  return gulp.src('src/**.js')
             .pipe(browserify({
               insertGlobals : true
             }))
             .pipe(gulp.dest('./dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('watch', function () {
  watch('src/**/*.{js,jsx}', batch(function (events, done) {
    gulp.run('jsx');
    gulp.run('scripts');
    done();
  }));
});
 
// gulp.task('default', ['stream', 'connect']);
gulp.task('default', ['watch', 'connect']);
