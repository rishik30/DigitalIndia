import React	from 'react'

import Svg			from '../../components/svg'
import Splash		from '../../components/splash'
import Meta 		from '../../components/meta'
import {HowCanYouContribute}	from './_how-can-you-contribute.jsx'
import {SupportUs}				from './_support-us.jsx'
import {InclusiveIndia}			from '../home/_inclusive-india.jsx'
import {DonateNow}				from '../home/_donate.jsx'
import WebsiteAPI				from '../../components/cms/api'

export default class Donate extends React.Component {

	state = {
		active: false,
		page: {}
	}

	componentDidMount () {
		let page = WebsiteAPI.getPage(this.props.website, "Donate")
		this.setState({ page })
	}

    render () {
		const { page } = this.state

		let metaTitle= "Indus Action | Donate";
		let metaDescription = (page.data) ? (page.data.basic.splashSubtitle) : "Every contribution is worthwhile and a step towards an inclusive society";
		let metaImage = window.location.origin+"/img/og.png";

		let splashImage = (page.data) ? (page.data.splash) : "/img/donate/splash.jpg"
		let splashHeader = (page.data) ? (page.data.basic.splashHeader) : "DONATE"
		let splashSubtitle = (page.data) ? (page.data.basic.splashSubtitle) : "Every contribution is worthwhile and a step towards an inclusive society"
		let card = (page.data) ? (page.data.basic.blueCard) : "Every contribution is worthwhile and a step towards an inclusive society. You can give in many ways and in any measure"

        return (
            <main className={"donate "+(!this.state.active||"active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage}/>
				<Splash
					onLoad={e=>this.setState({active: true})}
					bg={splashImage}
					title={splashHeader}
					subtitle={splashSubtitle}
					card={card}
				/>
				<HowCanYouContribute data={page.data}/>
				<SupportUs data={page.data}/>
				<InclusiveIndia />
				<DonateNow />
            </main>
        )
    }
}
