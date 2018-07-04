'use strict'

var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('build-api.md', buildFile)

gulp.task('watch-components', function () {
  gulp.watch('./components/*.md', buildFile)
})

gulp.task('build', ['build-api.md', 'watch-components'])

function buildFile () {
  return gulp.src('./components/*.md')
  .pipe(concat('api.md'))
  .pipe(gulp.dest('./'))
}
