var express = require('express')
var app = express();

window = {location: {}}
  , navigator = { userAgent: "" }
  , dummyElement = { style: {}, getElementsByTagName: function() { return [] } }
  , document = { createElement: function() { return dummyElement } };

require("babel-register")({
	presets: ["es2015", 'stage-0', 'react']
});
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};

//Disable socket pooling
require('http').globalAgent.maxSockets = Infinity

//Setup express
require('./server/express')(app);

//Setup router
require('./server/router_client')(app);

var server = app.listen(9000);
console.log("Agey Listening Now on port 9000")
