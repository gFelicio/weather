var gulp = require('gulp');
var sass = require('gulp-sass');

var orig = 'public/scss/*.scss';
var dest = 'public/css/';

gulp.task('sass', function()
{
    return gulp.src(orig)
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(dest))
});
