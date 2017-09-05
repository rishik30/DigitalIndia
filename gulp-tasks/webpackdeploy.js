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
			filename: "[name].min.js"
		},
		cache: false,
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
			new webpack.optimize.CommonsChunkPlugin({
				name: "vendor",
				filename: "vendor.min.js",
				minChunks: Infinity
			}),
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("production")
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			})
		],
		resolve: {
			extensions: [".js", ".jsx"]
		}
	};

	return gulp
		.src("./assets/jsx/index.jsx")
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest("./public/js"));
};
