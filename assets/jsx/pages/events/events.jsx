import React from "react";

// import WebsiteAPI from "../../components/cms/api";
import Svg from "../../components/svg";
import Splash from "../../components/splash";
import Meta from "../../components/meta";

export default class Events extends React.Component {
	state = {
		active: false,
		page: {}
	};

	componentDidMount() {
		// let page = WebsiteAPI.getPage(this.props.website, "Home");
		// this.setState({ page });
	}

	render() {
		let { data } = this.state.page
		let splashImage = (data) ? data.splash : "/img/home/bg.jpg"
		let splashTitle = (data) ? data.basic.splashHeader : "Events"

		return (
			<main className={"events " + (!this.state.active || "active")}>
				<Splash
					onLoad={e => this.setState({ active: true })}
					bg={splashImage}
					title={splashTitle}
					subTitle='Contribute towards a better & more connected India !'
				/>
			</main>
		);
	}
}
