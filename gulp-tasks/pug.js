var gulp 		= require('gulp'),
	pug			= require('gulp-pug')

module.exports = function () {
	gulp.src('./server/views/index.pug')
		.pipe(pug({locals: {production: process.env.NODE_ENV || false}}))
		.pipe(gulp.dest('./public/'))
};
