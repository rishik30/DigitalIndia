var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	sourcemaps 	= require('gulp-sourcemaps'),
	autoprefixer= require('gulp-autoprefixer'),
	concat 		= require('gulp-concat'),
	minifycss 	= require('gulp-cssmin'),
	neat 		= require('node-neat').includePaths,
	rename 		= require('gulp-rename'),
	livereload 	= require('gulp-livereload')

module.exports = function () {

	var paths = {
		scss: './assets/scss/**/*.scss'
	};

	var sassOptions = {
		includePaths	: [paths.scss].concat(neat),
		outputStyle		: 'expanded'
	}

	return gulp.src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(sourcemaps.write({includeContent: false}))
		.pipe(gulp.dest('./public/css'))
		.pipe(minifycss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload());
};