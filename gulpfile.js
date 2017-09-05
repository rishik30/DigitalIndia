var gulp 		= require('gulp');
//00--0000--0000--0000--0000--0000
//--------------------------------
//<><><<<><><<<><><<<><><<<><><<<>

var requireDir 	= require('require-dir'),
	runSequence = require('run-sequence'),
	livereload 	= require('gulp-livereload')

//Include the gulp-tasks directory so that we can use those tasks here
var tasks = requireDir('./gulp-tasks/');
//List:
//##Webpack
gulp.task('jsbuild', tasks.webpack);
gulp.task('jsdeploy', tasks.webpackdeploy);
//##Sass
gulp.task('sass', tasks.sass);
//##Clean
gulp.task('clean', tasks.clean);
//##Agey
gulp.task('agey', tasks.agey);
//##HTML
gulp.task('html', tasks.pug);

gulp.task('build', function(){
	//Run a sequence of steps(single/multiple tasks) to build in order.
	runSequence(
		['sass','html'],
		['jsbuild', 'agey']
	)
});

gulp.task('deploy', function(){

	process.env.NODE_ENV = 'production';
	//Run a sequence of steps(single/multiple tasks) to build in order.
	runSequence(
		['clean'],
		['sass', 'jsdeploy', 'html']
	)
});

gulp.task('default', ['build'], function () {
	livereload.listen();
    gulp.watch('./assets/scss/**/*.{sass,scss}', ['sass']);
});
