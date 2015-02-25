var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var jasmine = require('gulp-jasmine');
var karma = require('gulp-karma');

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
    	.pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('specs', function () {
    return gulp.src('dist/spec/*[sS]pec.js')
        .pipe(jasmine());
});

var testFiles = [
  'dist/spec/*.js'
];
 
gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});
 
// gulp.task('default', function() {
//   gulp.src(testFiles)
//     .pipe(karma({
//       configFile: 'karma.conf.js',
//       action: 'watch'
//     }));
// });
