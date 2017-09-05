var express 	= require('express')
var path 		= require('path')
var bodyParser 	= require('body-parser')
var compress	= require('compression')
var cors 		= require('cors')
var morgan		= require('morgan')

module.exports = function(app) {
	app.use(compress());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json())
	app.use(cors());
	app.use(morgan('dev'));
	app.use(express.static(path.join(__dirname, '../public'), {maxAge: 864000000, index: false}))
	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views/');
}
