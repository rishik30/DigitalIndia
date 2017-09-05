import React	from 'react'

import Svg			from '../../components/svg'
import Splash		from '../../components/splash'
import Meta 		from '../../components/meta'
import {Form}		from './_form.jsx'
import WebsiteAPI	from '../../components/cms/api'

export default class Contact extends React.Component {

	state = {
		active: false,
		page: {}
	}

	componentDidMount() {
		let page = WebsiteAPI.getPage(this.props.website, "Contact")
		this.setState({ page })
	}

    render () {
		const { page } = this.state

		let metaTitle= "Indus Action | Contact";
		let metaDescription = (page.data) ? (page.data.basic.splashSubtitle) : "WE’D LOVE TO HEAR FROM YOU";
		let metaImage = window.location.origin+"/img/og.png";

		let splashImage = (page.data) ? (page.data.splash) : "/img/contact/splash.jpg"
		let title = (page.data) ? (page.data.basic.splashHeader) : "GET IN TOUCH"
		let subtitle = (page.data) ? (page.data.basic.splashSubtitle) : "WE’D LOVE TO HEAR FROM YOU"
		let card = (page.data) ? (page.data.basic.blueCard) : "We are passionate development practitioners and travellers, in pursuit of true meaning within the above words."
		let email = (page.data) ? (page.data.contactDetails.email) : "support@indusaction.org"
		let phone = (page.data) ? (page.data.contactDetails.phone) : "011 4310 4871"
		let address = (page.data) ? (page.data.contactDetails.address) : "k-112, first floor, bk dutt Colony, new Delhi"

        return (
            <main className={"contact "+(!this.state.active||"active")}>
				<Meta title={metaTitle} description={metaDescription} image={metaImage}/>
				<Splash
					onLoad={e=>this.setState({active: true})}
					bg={splashImage}
					title={title}
					subtitle={subtitle}
					card={card}
				/>
				<section className="contact-form">
					<h2>we'd love to hear from you</h2>
					<div className="contact-details">
						<div className="detail">
							<Svg src="/img/contact/email.svg" />
							<p><a href={`mailto:${email}`}>{email}</a></p>
						</div>
						<div className="detail">
							<Svg src="/img/contact/phone.svg" />
							<p><a href={`tel:${phone}`}>{phone}</a></p>
						</div>
						<div className="detail">
							<Svg src="/img/contact/location.svg" />
							<p>{address}</p>
						</div>
					</div>
					<Form />
				</section>
            </main>
        )
    }
}
