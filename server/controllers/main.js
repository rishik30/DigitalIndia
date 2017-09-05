var path = require("path");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

import React from "react";
import Helmet from "react-helmet";
import routes from "../../assets/jsx/router.jsx";
import { renderToString } from "react-dom/server";
import { match, RouterContext } from "react-router";
import { Resolver } from "react-resolver";

var mailOptions = {
	host: "email-smtp.us-east-1.amazonaws.com",
	port: 587,
	secureConnection: false,
	auth: {
		user: "AKIAJQFF4TARDNIQSIEQ",
		pass: "AoT8DMDrEkmFFL9lE+Pg1ri5xq0fNjBBcePcTExiioYW"
	},
	tls: {
		ciphers: "SSLv3"
	}
};
var smtpTransport = nodemailer.createTransport(mailOptions);

exports.index = function(req, res) {
	match({ routes: routes.routes, location: req.url }, (error, redirectLocation, renderProps) => {
		var ifProduction = process.env.NODE_ENV == "production";
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			window.location.origin = req.protocol + "://" + req.get("host");
			Resolver.resolve(() => <RouterContext {...renderProps} />)
				.then(({ Resolved, data }) => {
					console.log(data);
					let reactString = renderToString(<Resolved />);
					let head = Helmet.rewind();
					head = {
						title: head.title.toString(),
						meta: head.meta.toString(),
						link: head.link.toString()
					};
					window.pathname = req.path;
					window.__REACT_RESOLVER_PAYLOAD__ = data;
					res.render("index", {
						reactString: reactString,
						production: ifProduction,
						head: head,
						initialState: data
					});
				})
				.catch(error => {
					console.log("ERROR", error);
					res.status(500).send(error);
				}); // Just in case!
		} else {
			res.status(404).send("Not found");
		}
	});
};

exports.contact = function(req, res) {
	var htmlTemplate =
		"<html>" +
		"<body>" +
		"<h1> Indus Action Web Contact </h1>" +
		"<br/>" +
		"<h4> Name : " +
		req.body.fname +
		" " +
		req.body.lname +
		"</h4>" +
		"<h4> Email : " +
		req.body.email +
		"</h4>" +
		"<h4> Phone : " +
		req.body.phone +
		"</h4>" +
		"<h4> Comments: </h4>" +
		"<p>" +
		req.body.comments +
		"</p>" +
		"<p> DO NOT REPLY TO THIS EMAIL</p>" +
		"</body>" +
		"</html>";

	var mailOptions = {
		from: req.body.firstName + "<hello@soch.io>", // sender address
		to: "Varuna.chand@indusaction.org", // list of receivers
		// to: "rishabh@sochtechnologies.com",
		replyTo: req.body.email,
		subject: "Indus Action Web Contact", // Subject line
		html: htmlTemplate
	};

	smtpTransport.sendMail(mailOptions, function(error, response) {
		if (error) {
			console.log(error);
		} else {
			console.log("Message sent: " + response.message);
		}

		// if you don't want to use this transport object anymore, uncomment following line
		smtpTransport.close(); // shut down the connection pool, no more messages
	});
	res.json({ success: true });
	res.end();
};
