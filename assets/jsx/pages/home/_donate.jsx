import React, {Component} from 'react'
import {Link} from 'react-router'
import Svg from '../../components/svg.jsx'

export class DonateNow extends Component {

    render() {
        let { data } = this.props
        const default_sponsorship = {}
        default_sponsorship["1Child"] = "500"
        default_sponsorship["25Children"] = "12,500"
        default_sponsorship["115Children"] = "57,500"
        const sponsorship = (data) ? (data.sponsorship) : (default_sponsorship)
        return(
            <section className="donate">
                <div className="row">
                    <div className="grid">
                        <Svg src="/img/home/educate-1.svg" />
                        <div className="content">
                            <p>educate <em>1 child</em></p>
                            <h1>Rs. {sponsorship["1Child"]}</h1>
                        </div>
                    </div>
                    <div className="grid">
                        <Svg src="/img/home/educate-25.svg" />
                        <div className="content">
                            <p>educate <em>25 children</em></p>
                            <h1>Rs. {sponsorship["25Children"]}</h1>
                        </div>
                    </div>
                    <div className="grid">
                        <Svg src="/img/home/educate-1000.svg" />
                        <div className="content">
                            <p>educate <em>115 children</em></p>
                            <h1>Rs. {sponsorship["115Children"]}</h1>
                        </div>
                    </div>
                </div>
                <Link to="/donate"><button className="btn-filled">donate now !</button></Link>
            </section>
        )
    }
}
