import React from "react";

import Svg from "../../components/svg";
import Splash from "../../components/splash";
import Meta from "../../components/meta";
import { ProjectEklavya } from "./_project-eklavya.jsx";
import { OtherProjects } from "./_other-projects.jsx";
import WebsiteAPI from '../../components/cms/api'

export default class Projects extends React.Component {
	state = {
		active: false,
		page: {}
	};

	componentDidMount () {
		let page = WebsiteAPI.getPage(this.props.website, "Projects")
		this.setState({ page })
	}

	render() {
		const { page } = this.state
		let metaTitle = "Indus Action | Project";
		let metaDescription = "Our flagship effort is Project Eklavya which aims to build a modern day India in which Arjun and Eklavya, irrespective of their birth in different social strata, can learn and grow together in the same school";
		let metaImage = window.location.origin + "/img/og.png";

		let splashImage = (page.data) ? (page.data.splash) : "/img/projects/splash.jpg"
		let splashHeader = (page.data) ? (page.data.basic.splashHeader) : "OUR PROJECTS"
		let card = (page.data) ? (page.data.basic.blueCard) : "Project Eklavya's vision is to enroll 1 million students by 2020"

		return (
			<main className={"projects " + (!this.state.active || "active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage} />
				<Splash
					onLoad={e => this.setState({ active: true })}
					bg={splashImage}
					title={splashHeader}
					card={card}
				/>
				<ProjectEklavya data={page.data} />
				<OtherProjects data={page.data} {...this.props} />
			</main>
		);
	}
}
