var gulp 		= require('gulp'),
	nodemon 	= require('gulp-nodemon');

module.exports = function () {
	var config = {
		script: 'app.js',
		ext: 'js',
		env: { 'NODE_ENV': process.env.NODE_ENV || 'development' }
	}

	return nodemon(config)
		.on('restart', function() {
			console.log('server restarting')
		})
};