var express = require("express");
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage });

module.exports = function(app) {
	var router = express.Router();
	var mainController = require("./controllers/main");

	//DEFAULT CLIENT ENDPOINTS
	//Client Side routing mostly handled by react-router
	router.get("/*", mainController.index);
	router.post("/contact", upload.array(), mainController.contact);
	app.use("/", router);
};
