var gulp    = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['server']);

gulp.task('server', shell.task([ 'npm start' ]));
