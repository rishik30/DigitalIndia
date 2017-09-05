import React, {Component} from 'react'
import {Link} from 'react-router'

export class Introduction extends Component {

    render() {
        let aboutUs
        if (this.props.data) {
            aboutUs = this.props.data.aboutUs
        } else {
            aboutUs = "Indus Action’s low-cost, high-stake policy implementation campaigns like Project Eklavya nurture existing leadership within Community and Partner Entrepreneurs. This network organizes existing resources within governments and civil society to achieve our mission across India"
        }
        return(
			<section className="section introduction">
				<div className="row">
					<div className="column">
						<img src="/img/general/indus-logo.png" />
					</div>
					<div className="column">
						<h2>ABOUT US</h2>
	                    <p dangerouslySetInnerHTML={{__html: aboutUs}}/>
	                    <Link to="/about"><button className="btn-text-left">read more</button></Link>
					</div>
				</div>
			</section>
        )
    }
}
