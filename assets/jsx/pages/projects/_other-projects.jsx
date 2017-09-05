import React, { Component } from "react";
import Svg from "../../components/svg.jsx";
import WebsiteAPI from '../../components/cms/api'

export class OtherProjects extends Component {

	state = {
		page: {}
	}

	componentDidMount () {
		let page = WebsiteAPI.getPage(this.props.website, "Projects - Profiles")
		this.setState({ page })
	}

	_ec = {
		title: "enrollment campaign",
		text: "From 2013-16, over 1500 volunteers and community champions and 20+ organisations have contributed to Project Eklavya. The journey so far has been on an exponential growth curve, with 166, 607 and 6040 children enrolled over the three years. In 2017, the ownership for information dissemination has been taken over completely by the government and communities.<br/><br/>103 Shiksha Sahyogis, many of whom have already benefitted from RTE Section 12(1)(c), organized at 12 centres all over Delhi.  They supported 8000+ families daily over phone calls. Together with the Helpline and Siksha Sahyogis, we reached out to over 1.5 Lakh families in 2017 campaign. Delhi government used to follow a transactionally intensive lottery mechanism, but has now moved towards an online admissions system which has made the task simpler for all stakeholders.<br/><br/>The insights from the last four years have been documented in a ‘Campaign-in-a-Box’ toolkit. Any entrepreneurial individual can extend the mission to their locality, city or state using this toolkit and the support provided by Project Eklavya Network.<br/><br/>As we continue to build Community and Partner Entrepreneurs, we believe this template can be continuously improved and customised to the challenges of policy implementation across India.",
        className: "ec"
	}

	_srp = {
		title: "school readiness program",
		text: "Private schools are becoming increasingly diverse in their composition, in the backdrop of Section 12(1)(c) of Right to Education Act. As the schools adjust and adapt to socio-economic diversity in their classrooms, there is a simultaneous necessity to ensure all students meet the expectations of the new institutions that they are going to be a part of.<br/><br/>In 2016, Indus Action in association with its curriculum partner, Re:imagine, ran a 5-week Summer Camp in 4 low-income schools in Delhi, to build foundational literacy, numeracy and pro-social skills in children in the age group of 4-5 years. The children showed an average growth of 35% in both literacy and numeracy.<br/><br/>A parallel 5-week programme was designed for the mothers of children enrolled in the Summer Camp. It focused on fostering a supportive academic environment at home, with an emphasis on strengthening the parent-child relationship and the socio-emotional development of the child. The intention was to sustain the impact of the intervention by involving all the key adults influencing child’s growth.<br/><br/>After a successful pilot, Indus Action is now preparing to rollout its School Readiness Project in 10 high-income schools. This is a two-pronged, in-school intervention on classroom and home-based learning. Children from Economically Weaker Sections in the age group of 3 -6 years and their mothers form the target audience. The curriculum focuses on bridging the English literacy gap and strengthening socio-emotional development.",
        className: "srp"
	}

	_pe = {
		title: "project eklavya",
		text: "Indus Action has embarked on a mission to build a network of entrepreneurs working on Right To Education (RTE) Section 12(1)(c) across the country. We call this network the Project Eklavya Network (PEN).<br/>PEN will be India’s premier DO TANK consulting with various state and local governments for implementation of RTE Section 12(1)(c) in India.<br/>PEN works with the Tri-sector (public, civil society and private) towards successful implementation of RTE Section 12(1)(c) thereby empowering the millions of disenfranchised in India.<br/>If you want to be a part of this network and  feel that you can be a valuable resource towards creating  an Inclusive Nation, reach out to us at <a href='mailto:pen@indusaction.org'>pen@indusaction.org</a>",
        className: "pen",
        profiles: [
            {
                name: "Avinash Mohan Chetty",
                description: "Avinash is our Partner Entrepreneur in Bangalore. He started his career at the trade office of the Swedish embassy assisting Swedish companies in India before pivoting into the socio—developmental sector. In a career spanning over 5+ years, he has dawned many hats including that of management consulting, marketing, design, operations, program management, campaign management, and students & volunteer engagement. To help improve the state of governance in our country, he joined Citizens for Accountable Governance which played an instrumental role in strengthening Mr. Modi’s campaign in the 2014 parliamentary elections.",
                picture: "/img/projects/profiles/profile1.png"
            },
            {
                name: "Saleem Khan",
                description: "Saleem is our partner entrepreneur in Lucknow. He has completed his graduation in Physics (Hons) and Post-graduation in Social Work from Aligarh Muslim University. He has done a development course for future leaders from IIM-Udaipur. He has also worked as a city Programme Manager in ISLI. He focused on learning outcomes of students through inculcating leadership among school leaders of low private budget schools. He closely worked with tribal government schools under his Gandhi Fellowship,and also worked with Kaivalya Education Foundation. He significantly wants to contribute to the area of proper implementation of Education Policies in Indian System so that all the children have access quality and affordable education.",
                picture: "/img/projects/profiles/profile2.png"
            },
            {
                name: "Raunaq Pradhan",
                description: "Raunaq is our partner entrepreneur in Raipur and has completed his PhD in Electrical and Electronic Engineering from Nanyang Technological University, Singapore, having completed his Bachelors in Biomedical Engineering from National Institute of Technology, Rourkela, India.<br/><br/>Adrenaline junkie, traveller, foodie, dancer are some of the adjectives used by his friends to describe him, basically things he loves doing.<br/><br/>He is an innovator at heart, and contributing to the community is something he has always wanted to do.",
                picture: "/img/projects/profiles/profile3.png"
            },
            {
                name: "Sushanta Kumar Bhuyan",
                description: "Sushanta is our Partner Entrepreneur in Raipur, he has a social sector career spanning more than two decades. Sushanta brings with him a wealth of experience in Entrepreneurship, Program strategy development, community based sustainable interventions etc. After having been in Naandi Foundation for more than a decade, he started his own NGO called Development Initiatives, in Raipur, through he spearheads many educational interventions in rural Chhattisgarh.",
                picture: "/img/projects/profiles/profile4.png"
            },
            {
                name: "Shijoy Varughese",
                description: "Shijoy is our Partner Entrepreneur in Pune, he has  worked with the Delhi government in both its education task force as well as in its advisory team on Mohalla Sabhas. His research interests include social innovations and role of academia in civil society. His outrageous articles have been published by international publications like The Huffington Post and the International Policy Digest.<br/><br/>He hopes to learn, grow, and mature with each task, and at the same time aspire to bring in as much positive change as he can to the world around him through the instrument of policy.",
                picture: "/img/projects/profiles/profile5.png"
            }
        ]
	}

	render() {
		const { data } = this.props
		const { page } = this.state
		let enrollmentImage = (data) ? (data.enrollmentCampaign.backgroundPicture) : "/img/home/mission-image.jpg"
		let schoolReadinessImage = (data) ? (data.schoolReadinessProgram.backgroundPicture) : "/img/home/vision-image.jpg"
		let projectEklavyaNetworkImage = (data) ? (data.projectEklavyaNetwork.backgroundPicture) : "/img/home/splash.jpg"

		if (data) {
			this._ec.text = data.enrollmentCampaign.description
			this._srp.text = data.schoolReadinessProgram.description
			this._pe.text = data.projectEklavyaNetwork.description
		}

		if (page.data) {
			this._pe.profiles = page.data.partners.items
		}

		return (
			<section className="other-projects">
				<article className="project">
					<img src={enrollmentImage} />
					<div className="icon">
						<Svg src="/img/projects/enrollment.svg" />
					</div>
					<div className="content">
						<h2>enrollment campaign </h2>
						<p>(2013 - 2016)</p>
						<button className="btn-filled btn-text-left" onClick={e=>this._launch(this._ec)}>read more</button>
					</div>
				</article>
				<article className="project">
					<img src={schoolReadinessImage} />
					<div className="icon">
						<Svg src="/img/projects/readiness.svg" />
					</div>
					<div className="content">
						<h2>school readiness program </h2>
						<p>(2016 - Present)</p>
						<button className="btn-filled btn-text-left" onClick={e=>this._launch(this._srp)}>read more</button>
					</div>
				</article>
				<article className="project">
					<img src={projectEklavyaNetworkImage} />
					<div className="icon">
						<Svg src="/img/projects/pen.svg" />
					</div>
					<div className="content">
						<h2>Project Eklavya Network </h2>
						<p>(2016 - Present)</p>
						<button className="btn-filled btn-text-left" onClick={e=>this._launch(this._pe)}>read more</button>
					</div>
				</article>
			</section>
		);
	}

	_launch = (project) => {
		document.dispatchEvent(new CustomEvent("activateModal", {detail: <Project data={project} />}))
	}
}

class Project extends Component {
	render() {
		let {title, text, className} = this.props.data
		return(
			<div className={"project " + className}>
				<h2>{title}</h2>
				<p dangerouslySetInnerHTML={{__html: text}}></p>
                {
                    this._renderProfiles()
                }
			</div>
		)
	}

    _renderProfiles = () => {
        if(this.props.data.profiles) {
            return(
                <div className="profiles">
                    <h3>Partner Entrepreneur profiles</h3>
                    {this.props.data.profiles.map((profile, i) => {
                        return(
                            <div className="member">
								<div className="image">
									<img src={profile.picture} />
								</div>
								<div className="text">
									<span className="text-name">{profile.name}</span>
									<span className="text-short" dangerouslySetInnerHTML={{ __html: profile.description }} />
								</div>
							</div>
                        )
                    })}
                </div>
            )
        }
        else return null
    }
}
