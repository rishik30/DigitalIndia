import React from "react";
import { render } from "react-dom";
import { Resolver } from "react-resolver";
import { browserHistory, match, Router } from "react-router";

import routes from "./router";

match(
	{ history: browserHistory, routes: routes.routes },
	(error, redirectLocation, renderProps) => {
		Resolver.render(() => <Router {...renderProps} />, document.getElementById("ia"));
	}
);
