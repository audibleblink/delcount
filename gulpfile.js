'use strict'

var gulp   = require('gulp')
var sass   = require('gulp-sass')
var slim   = require("gulp-slim")
var minify = require('gulp-minify')


gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
    }))
    .pipe(gulp.dest('www'))
})


gulp.task('slim', function(){
  gulp.src("src/*.slim")
    .pipe(slim({ pretty: true }))
    .pipe(gulp.dest("www"))
})


gulp.task('sass', function () {
  return gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('www'))
})


gulp.task('default', function(){
  gulp.watch('src/**', ['compress', 'slim', 'sass'])
})
