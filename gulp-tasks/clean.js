var gulp 		= require('gulp'),
	del			= require('del')

module.exports = function () {
	return del([
		'./public/js/**/*',
		'./public/index.html',
		'./public/css/**/*'
	])
};