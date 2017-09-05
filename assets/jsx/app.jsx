import React from "react";
import { resolve } from "react-resolver";

// import WebsiteAPI from "./components/cms/api";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Modal from "./components/modal";
import Loader from "./components/loader";
import Toast from "./components/toast";

var WebFont = require("webfontloader");

class App extends React.Component {
	componentDidMount() {
		WebFont.load({
			typekit: {
				id: "tux5ywn"
			}
		});
	}

	render() {
		return (
			<div id="indus-action-website-wrapper">
				<Menu />
				{React.cloneElement(this.props.children, {
					website: this.props.website
				})}
				<Footer />
				<Modal />
				<Loader />
				<Toast />
			</div>
		);
	}
}

export default resolve("website", () => {})(App);
