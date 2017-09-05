import React from "react";

// import WebsiteAPI from "../../components/cms/api";
import Svg from "../../components/svg";
import Splash from "../../components/splash";
import Meta from "../../components/meta";

export default class Home extends React.Component {
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
		let metaTitle = "Indus Action";
		let metaDescription =
			"Indus Action’s low-cost, high-stake policy implementation campaigns like Project Eklavya nurture existing leadership within Community and Partner Entrepreneurs";
		let metaImage = window.location.origin + "/img/og.png";
		let splashImage = (data) ? data.splash : "/img/home/bg.jpg"
		let splashTitle = (data) ? data.basic.splashHeader : "Achieve equitable opportunity for every Indian"

		return (
			<main className={"home " + (!this.state.active || "active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage} />
				<Splash
					onLoad={e => this.setState({ active: true })}
					bg={splashImage}
					title={splashTitle}
					subTitle=''
				/>
			</main>
		);
	}
}
