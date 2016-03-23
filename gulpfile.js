var gulp = require('gulp');
var less = require('gulp-less');
var ap   = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('styles.less')
    .pipe(less())
    .pipe(ap({browsers: ['last 2 versions']}))
    .pipe(gulp.dest(''));
});

gulp.task('default', function() {
  gulp.watch('styles.less', ['styles']);
});
