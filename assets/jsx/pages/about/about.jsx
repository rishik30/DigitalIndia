import React	from 'react'

import Svg				from '../../components/svg'
import Splash			from '../../components/splash'
import Meta 			from '../../components/meta'
import {Actions}		from './_actions.jsx'
import {MeetOurTeam}	from './_meet-our-team.jsx'
import WebsiteAPI		from '../../components/cms/api'

export default class About extends React.Component {

	state = {
		active: false,
		page: {}
	}

	componentDidMount() {
		let page = WebsiteAPI.getPage(this.props.website, "About")
		this.setState({ page })
	}

    render () {
		let { page } = this.state
		let metaTitle= "Indus Action | About";
		let metaDescription = (page.data) ? (page.data.basic.splashSubtitle) : "A self titled ‘do-tank’!";
		let metaImage = window.location.origin+"/img/og.png";

		let splashImage = (page.data) ? (page.data.splash) : "/img/about/splash.jpg"
		let splashSubtitle = (page.data) ? (page.data.basic.splashSubtitle) : "a self titled ‘do-tank’!"
		let card = (page.data) ? (page.data.basic.blueCard) : "We are a policy implementation organization doing the necessary tasks to see that policies designed to transform the social fabric of the country are fully realized, a self titled 'do-tank'!"

        return (
            <main className={"about "+(!this.state.active||"active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage}/>
				<Splash
					onLoad={e=>this.setState({active: true})}
					bg={splashImage}
					title="ABOUT US"
					subtitle={splashSubtitle}
					card={card}
				/>
				<Actions data={page.data}/>
				<MeetOurTeam {...this.props}/>
            </main>
        )
    }
}
