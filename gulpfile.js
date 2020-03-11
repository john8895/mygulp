var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')

// sass.compiler = require('node-sass');

gulp.task('copy', function () {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'))
})

gulp.task('jade', function() {
    gulp.src('./src/*.jade')
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('sass', function () {

    return gulp.src('./src/css/sass/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        //
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./src/css/sass/*.scss', ['sass']);
    gulp.watch('./src/*.jade', ['jade']);
});

gulp.task('default',['jade','sass','watch']);