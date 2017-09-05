import React, { Component } from "react";
import {Link} from 'react-router'
import WebsiteAPI from '../../components/cms/api'

export class LatestPublications extends Component {

	state = {
		page: {}
	}

	componentDidMount() {
		let page = WebsiteAPI.getPage(this.props.website, "Publications");
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
	]

	render() {
		let publications = (this.state.page.data) ? (this.state.page.data.publications.items.reverse()) : this._publications
		return (
			<section className="latest-publications">
				<h2>latest <strong>publications</strong></h2>
				<ul className="publications">
					{publications.map((publication, i) => {
						if (i<3)
						return(
							<article className="report">
								<div className="image"><img src={publication.picture} /></div>
								<div className="content">
									<h4>{publication.title}</h4>
									<p dangerouslySetInnerHTML={{__html: publication.description}} />
									<a href={publication.link} target="_blank">View Report</a>
								</div>
							</article>
						)
					})}
				</ul>
				<Link to="/publications">
					<button className="default">view all publications</button>
				</Link>
			</section>
		);
	}
}
