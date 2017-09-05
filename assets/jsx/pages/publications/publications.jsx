import React from "react";

import Svg from "../../components/svg";
import Splash from "../../components/splash";
import Meta from "../../components/meta";
import { AllPublications } from "./_all-publications.jsx";
import WebsiteAPI from '../../components/cms/api'

export default class Publications extends React.Component {
	state = {
		active: false,
		page: {}
	};

	componentDidMount () {
		let page = WebsiteAPI.getPage(this.props.website, "Publications")
		this.setState({ page })
	}

	_publications = [
		{
			picture: "/img/publications/campaign.jpg",
			title: "Campaign 1.0 Report",
			description: "This report highlights the interventions made by INDUS ACTION for the admission cycle 2014-15, to create more awareness in the South district of Delhi. Based on our campaign experience, we present a template for motivated individuals, civil society organizations, academic institutions to build on and replicate in their respective geographical areas across India.",
			cta: "View Report",
			link: "https://issuu.com/indusaction/docs/indus_action__campaign_report_2014"
		},
		{
			picture: "/img/publications/social_inclusion.jpg",
			title: "Social Inclusion Research Report",
			description: "This report looks at the the motivation behind Section 12(1)(c), studies international case studies and recommends next steps for schools and civil society. The report also includes primary research done by INDUS ACTION, and highlights 8 schools as bright spots, implementing a host of inclusive practices, along with a perception study of schools across Delhi.",
			cta: "View Report",
			link: "https://issuu.com/indusaction/docs/indus_action_social_inclusion_repor"
		},
		{
			picture: "/img/publications/status.jpg",
			title: "Status of Section 12(1)(c) implementation in Delhi",
			description: "The report highlights the status of implementation of Section 12(1)(c) of Right to Education in each Vidhan Sabha of the city of Delhi. It is an attempt to activate the political class of the City. The report also includes recommendations for each stakeholder involved.",
			cta: "View Report",
			link: "https://issuu.com/indusaction/docs/25__full__indus_action"
		},
		{
			picture: "/img/publications/handbook.jpg",
			title: "Social Inclusion Practices Handbook",
			description: "INDUS ACTION has complied a short handbook for educators who teach in mixed classrooms, especially after the implementation of Section 12(1)(c) of RTE. This handbook has suggestions for pedagogical changes, to make classrooms more inclusive.",
			cta: "View Report",
			link: "https://issuu.com/indusaction/docs/indus_action_social_inclusion_handb"
		},
		{
			picture: "/img/publications/school_readiness.jpg",
			title: "School Readiness Program Memo",
			description: "Key learnings from a 5 week early childhood education program organised by Indus Action with the children enrolled under RTE Section 12(1)(c)",
			cta: "View Report",
			link: "https://drive.google.com/file/d/0B4yH-UsfpICFUlZKR0NpQUpuN2c/view"
		},
		{
			picture: "/img/publications/template_cards.jpg",
			title: "Project Eklavya Template Cards",
			description: "Design Thinking cards to allow anyone to replicate Indus Action's campaign work in their context.",
			cta: "View Report",
			link: "https://www.dropbox.com/s/14ijt32aj27rmut/IA_Campaign%20Template%20Cards%20HR.pdf.pdf?dl=0"
		}
	];

	render() {
		const { page } = this.state
		let metaTitle = "Indus Action | Publications";
		let metaDescription = "Indus Action seeks to mobilize public resources and empower communities to solve India's wide gap between policy framing and grassroots implementation";
		let metaImage = window.location.origin + "/img/og.png";
		let splashImage = (page.data) ? (page.data.splash) : "/img/publications/splash.jpg"
		let splashHeader = (page.data) ? (page.data.basic.splashHeader) : "DISCOVER PUBLICATIONS"

		if (page.data) {
			this._publications = page.data.publications.items
		}

		return (
			<main className={"publications " + (!this.state.active || "active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage} />
				<Splash
					onChange={e => this.setState({ active: e })}
					bg={splashImage}
					title={splashHeader}
				/>
				<AllPublications data={this._publications} active={this.state.active} />
				{/* <AllPublications year="2015" data={this._publications2016} /> */}
			</main>
		);
	}
}
