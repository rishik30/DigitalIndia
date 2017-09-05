var gulp = require("gulp"),
	gutil = require("gulp-util"),
	path = require("path"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	webpackStream = require("webpack-stream"),
	webpack = require("webpack");

module.exports = function(callback) {
	webpackConfig = {
		entry: {
			vendor: ["react", "react-dom", "react-router", "webfontloader", "history"],
			app: path.resolve(__dirname + "/../assets/jsx/index.jsx")
		},
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "public/js"),
			publicPath: "/js/"
		},
		cache: true,
		watch: true,
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: "babel-loader"
				},
				{
					test: /\.css$/,
					loader: "style-loader!css-loader"
				}
			]
		},
		plugins: [
			new webpack.NamedModulesPlugin(),
			new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en)$/),
			new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 200000 })
		],
		resolve: {
			extensions: [".js", ".jsx"]
		}
	};
	return gulp
		.src("./assets/jsx/index.jsx")
		.pipe(webpackStream(webpackConfig, webpack))
		.on("error", function() {
			this.emit("end"); // Recover from errors
		})
		.pipe(gulp.dest("./public/js"));
};
