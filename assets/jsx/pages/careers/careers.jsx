import React	from 'react'

import Svg			from '../../components/svg'
import Splash		from '../../components/splash'
// import Affiliates 	from '../../components/affiliates'
import Meta 		from '../../components/meta'
import WebsiteAPI	from '../../components/cms/api'

export default class Careers extends React.Component {

	state = {
		active: false,
		page: {}
	}

	componentDidMount() {
		let page = WebsiteAPI.getPage(this.props.website, "Careers")
		this.setState({ page })
	}

    render () {
		const { page } = this.state

		let metaTitle= "Indus Action | Careers";
		let metaDescription = (page.data) ? (page.data.basic.splashSubtitle) : "Get involved in policy implementation !";
		let metaImage = window.location.origin+"/img/og.png";

		let splashImage = (page.data) ? (page.data.splash) : "/img/careers/splash.jpg"
		let title = (page.data) ? (page.data.basic.splashHeader) : "JOIN US"
		let subtitle = (page.data) ? (page.data.basic.splashSubtitle) : "get involved in policy implementation !"
		let card = (page.data) ? (page.data.basic.blueCard) : "Indus Action was founded by graduate students committed to bringing about systematic change in India"

        return (
            <main className={"careers "+(!this.state.active||"active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage}/>
				<Splash
					onLoad={e=>this.setState({active: true})}
					bg={splashImage}
					title={title}
					subtitle={subtitle}
					card={card}
				/>
				<Content data={page.data}/>
            </main>
        )
    }
}

class Content extends React.Component {

	render() {
		let quote = (this.props.data) ? (this.props.data.quote.replace(/(<([^>]+)>)/ig, "")) :
		"Be part of the mission to solve India's deep rooted problems by mobilizing public resources and empowering local communities through social campaigns. Indus Action is a policy implementation organization comprising of dedicated and intelligent individuals passionate about India's future. Join us as we translate policy into practice!"
		return(
			<section className="content">
				<Svg className="opening-quote" src="/img/careers/open-quote.svg" />
				<p className="quote">
					{/* <img className="opening-quote" src="/img/careers/quote.svg" /> */}
					{ quote }
					<img className="closing-quote" src="/img/careers/closed-quote.svg" />
				</p>
				<a href="https://indusaction.recruiterbox.com/" target="_blank"><button className="btn-opaque">apply now !</button></a>
			</section>
		)
	}
}
