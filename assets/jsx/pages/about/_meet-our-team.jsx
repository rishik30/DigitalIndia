import React, { Component } from "react";
import WebsiteAPI from "../../components/cms/api"

export class MeetOurTeam extends Component {

	state = {
		active: 0,
		isActive: true,
		teamPage: {},
		governancePage: {}
	}

	componentDidMount() {
		let teamPage = WebsiteAPI.getPage(this.props.website, "About - Team")
		let governancePage = WebsiteAPI.getPage(this.props.website, "About - Governance Board")
		this.setState({ teamPage, governancePage })
	}

	_team = [
		[
			{
				name: "Tarun Cherukuri",
				description: "Tarun is your go to person for ‘chai pe charcha’ about anything ranging from fiction, non-fiction to world affairs. He graduated with an MPA/ID from the Harvard Kennedy School and prior to his foray into ensuring access to quality education for all, he used to ensure access to quality ice-cream and jams for all at Hindustan Unilever. ",
				title: "CEO",
				short: "Tarun is your go to person for ‘chai pe charcha’ about anything ranging from fiction, non-fiction to world affairs.",
				picture: "/img/about/members/Tarun.jpeg"
			},
			{
				name: "Varuna Chand",
				description: " The good and bad cop all in one. Aside from managing Human Resources and Finance, Varuna ensures we are all well fed and alive, while also ensuring we meet our deadlines. An alumnus of IMT and LSE, she has previously worked with Wipro and Teach for India.",
				title: "COO",
				short: "Varuna ensures we are all well fed and alive, while also ensuring we meet our deadlines.",
				picture: "/img/about/members/VarunaChand.jpg"
			},
			{
				name: "Varun Rangarajan",
				description: "Our very own Ringo Starr, Varun is a drummer who also likes to trek. He is in charge of the expansion of the project on a pan-India level. In the past, he has worked with TCS, the Azim Premji Foundation and Ashoka Innovators. ",
				title: "CGO",
				short: "He is in charge of the expansion of the project on a pan-India level. In the past, he has worked with TCS, the Azim Premji Foundation and Ashoka Innovators.",
				picture: "/img/about/members/Varun.jpg"
			},
			{
				name: "Neha Jagani",
				description: "Neha is a certified mountaineer and has been a Teach for India Fellow. Her work with the Indian Political Action Committee steered her towards policy implementation. When not working on the expansion of the project, she likes to read, travel and hang off the occasional rock. ",
				title: "Expansion Associate",
				short: "Her work with the Indian Political Action Committee steered her towards policy implementation. ",
				picture: "/img/about/members/Neha.jpg"
			},
			{
				name: "Anjali Sharma",
				description: "When Anjali isn’t working on HR and financial policy at Indus Action, she can be found vegetating on the couch indulging in ‘period-dramas’. She holds a BComm degree from Delhi University and has worked with the social media marketing firm Vibaanta. Amidst her realization that her degree was a lie, she tried her hand at Theatre. The rest is history. ",
				title: "Operations Associate",
				short: "When Anjali isn’t working on HR and financial policy at Indus Action, she can be found vegetating on the couch indulging in ‘period-dramas’.",
				picture: "/img/about/members/Anjali.jpeg"
			},
			{
				name: "Gayatree Dey",
				description: "Gayatree has 16 years of experience in the social sector having worked  on various issues like socio-economic empowerment of women in rural Orissa, sexuality and life skill education, and HIV / AIDS. An Oddissi dancer and a food enthusiast, she is the go to person for lunch dates to different parts of the city.  She holds a Masters degree in Sociology and is presently pursuing Masters in Psychology from IGNOU.",
				title: "C Cube Lead",
				short: "Gayatree has 16 years of experience in the social sector having worked  on various issues like socio-economic empowerment of women in rural Orissa, sexuality and life skill education, and HIV / AIDS. ",
				picture: "/img/about/members/Gayatree.jpeg"
			},
			{
				name: "Kritika Sangani",
				description: "The resident Gujju, if her incredibly high level of self-awareness and discipline doesn’t make you envious, her notebook with her beautiful handwriting and so many different colours of ink, definitely will.  At Indus Action she employs her previously acquired sales acumen to rope in schools for our school readiness program in addition to leading the early childhood education and social inclusion initiatives. ",
				title: "Early Childhood Education and Social Inclusion Lead",
				short: "At Indus Action she employs her previously acquired sales acumen to rope in schools for our school readiness program in addition to leading the early childhood education and social inclusion initiatives. ",
				picture: "/img/about/members/KritikaSangani.jpg"
			},
			{
				name: "Tamanna Ranga",
				description: "An alumnus of NIT Kurukshetra, Tamanna is the person to discuss fiction, sufi music, anime or poetry with. Talk about a multi-faceted personality! Beyond that, she also can share a trick or two about engaging people on Twitter! You can find her at her best and surprising self in a community meeting, where she can handle a large gathering of 50+ women with grace and ease.",
				title: "Deputy C Cube Lead",
				short: "You can find her at her best and surprising self in a community meeting, where she can handle a large gathering of 50+ women with grace and ease.",
				picture: "/img/about/members/Tamanna.jpeg"
			}
		],
		[
			{
				name: "Sunil Singh",
				description: "Sunil Singh is a technology leader, as an investor and as an operations General Manager, with a focus on conceptualizing, delivering and managing technology-enabled products and services.<br/><br/>Sunil currently serves as the President and Board Member at Greenfence and the Executive Chairman at MIMOTech. At Greenfence, he is working with executives at global retailers and manufacturers such as Nestle, Cargill, The Coca Cola Company, Safeway, Krogers and Walmart. He was also the Chief Operating Officer of Bridge International Academies which seeks to build a network of thousands of “retail schools”, along the lines of commercial retail ventures. <br/><br/> He has a Ph.D in Robotics from Cornell University, New York and a B.Tech from IIT, Kanpur.",
				title: "Phd, Robotics and ex-CTO, Bridge International Schools",
				picture: "/img/about/members/Sunil.jpg"
			},
			{
				name: "Gayatri Nair Lobo",
				description: "Gayatri Nair Lobo is a Senior Project Manager at Dalberg's Mumbai office. She has extensive experience across education, media, telecom and retail. <br/><br/> Prior to joining Dalberg, Gayatri was the Chief Operating Officer at Teach For India and had played a significant part in the scale up of operations over the last 6 years. As COO, Gayatri managed fundraising, HR, Technology, Organisational Effectiveness, Fellowship recruitment, Fellowship selection, Communications & Board governance. <br/><br/> Prior to Teach For India, Gayatri was a manager at OC&C Strategy consultants in their Mumbai and (for a short while) London offices. ",
				title: "ex-COO, TFI and Associate Partner, Dalberg",
				picture: "/img/about/members/GayatriLobo.png"
			},
			{
				name: "Nathalie Laidler Kylander",
				description: "She is passionate and enthusiastic professional with 30 years of experience in both the private and nonprofit sectors. Her personal mission is to support social entrepreneurs and the organizations they lead, to enable them to successfully deliver on their own missions. <br/><br/> It is been her privilege to be a Managing Director at the venture philanthropy firm, DRK Foundation and honor to sit on a number of nonprofit boards, including Indus Action. <br/><br/>For a decade, she taught Nonprofit Management and Leadership at graduate schools, most recently at the Harvard Kennedy School. Her area of expertise is nonprofit marketing and her research focuses on nonprofit brand management.",
				title: "PhD ,Managing Director at DRK Foundation",
				picture: "/img/about/members/Nathalie.png"
			},
			{
				name: "Kavikrut",
				description: "He has a background in early stage startups and running large scale operations. <br/><br/>He was previously in Operations at Amazon India and earlier in his career, founded and built two healthcare ventures (Mobile Medics and Piramal eSwasthya) that provided affordable and high quality services to rural India. <br/><br/>He holds an MBA from the Harvard Business School and an MSc in Finance from BITS Pilani. His interests include photography and motorcycling.",
				title: "Chief Growth Officer at OYO",
				picture: "/img/about/members/Kavikrut.png"
			},
            {
				name: "Tomos",
				description: "After graduating from the University of Cambridge, Tomos joined the Teach First programme in 2006 where he taught Science for two years at Wembley High Technology College in London.<br/><br/> This transformative experience instilled the deep belief in him that every child can succeed when given the right support.  After working for an international ethical consultancy firm Tomos relocated to India in 2009 to work with Teach for India and Teach For All where he has played a variety of roles including Programme Manager, Partnership Engagement Director and Chief Operating Officer. <br/><br/> Tomos is returned to Teach First in 2014 as the London Director where his team work with over 1200 new Teachers, 300 schools and 3500 Teach First Alumni.  In August 2017 he will join STIR Education as their Chief Operating Officer. Tomos is a Governor and Trustee of two inner city London schools.",
				picture: "/img/about/members/Tomos.jpg"
			}
		]
	];

	render() {
		let { teamPage, governancePage } = this.state
		if (teamPage.data) {
			this._team[0] = teamPage.data.partners.items
		}
		if (governancePage.data) {
			this._team[1] = governancePage.data.partners.items
		}
		return (
			<section className="our-team">
				<h3>meet our team</h3>
				<div className="toggle">
					<div onClick={e => this._toggleTo(0)} className={"toggle-item" + (this.state.active == 0 ? " active" : "")}>TEAM</div>
					<div onClick={e => this._toggleTo(1)} className={"toggle-item" + (this.state.active == 1 ? " active" : "")}>GOVERNANCE BOARD</div>
				</div>
				<div className={"team" + (this.state.isActive ? " active" : "")}>
					{this._team[this.state.active].map(teamMember => {
						return (
							<div className="team-member">
								<div className="image">
									<img src={teamMember.picture} />
								</div>
								<div className="text">
									<span className="text-name">{teamMember.name}</span>
									<span className="text-position">{teamMember.title || ""}</span>
									<span className="text-short" dangerouslySetInnerHTML={{ __html: teamMember.description }} />
								</div>
							</div>
						);
					})}
				</div>
			</section>
		);
	}

	_toggleTo = index => {
		this.setState({ isActive: false });
		setTimeout(() => {
			this.setState({ active: index });
			setTimeout(() => {
				this.setState({ isActive: true });
			}, 200);
		}, 400);
	};
}
