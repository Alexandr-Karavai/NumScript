const gulp = require('gulp');
const jison = require('gulp-jison');
const babel = require('gulp-babel');
const jasmine = require('gulp-jasmine');
const watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch(['./grammar/**/*.js', './grammar/**/*.jison'], ['build']);
});

gulp.task('build-grammar', () => {
    return gulp.src('./grammar/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./lib'));
});

gulp.task('jison', () => {
  return gulp.src('./grammar/**/*.jison')
        .pipe(jison({
            moduleType: 'commonjs'
        }))
        .pipe(gulp.dest('./lib'));
});

gulp.task('build', ['jison', 'build-grammar'], () => {
    gulp.start('watch');
});
