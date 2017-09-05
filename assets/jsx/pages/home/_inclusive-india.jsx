import React, {Component} from 'react'
import Svg from '../../components/svg.jsx'

export class InclusiveIndia extends Component {

    render() {
        let { data } = this.props
        let subTitle = (data) ? (data.stats.headingSubtitle) : ("Every contribution is a worth while and a step towards an inclusive society. You can give in many ways and in any measure")
        let projectEklavya = (data) ? (data.stats.projectEklavyaNetwork) : "5 SITES"
        let studentsEnrolled = (data) ? (data.stats.studentsEnrolled) : "6900"
        let studentsRetention = (data) ? (data.stats.studentsRetention) : "94%"
        return(
            <section className="inclusive-india">
                <h2 className="title">be part of building an <em>inclusive india</em></h2>
                <p className="sub-title">{subTitle}</p>
                <div className="row">
                    <div className="grid">
                        <Svg src="/img/home/inclusive-funds-icon.svg" />
                        <p className="head">students enrolled(2016)</p>
                        <p className="count">{studentsEnrolled}</p>
                    </div>
                    <div className="grid">
                        <Svg src="/img/home/inclusive-volunteers-icon.svg" />
                        <p className="head">Students retention(2016)</p>
                        <p className="count">{studentsRetention}</p>
                    </div>
                    <div className="grid">
                        <Svg src="/img/home/home-stats-icon.svg" />
                        <p className="head">Project eklavya network(2017)</p>
                        <p className="count">{projectEklavya}</p>
                    </div>
                </div>
            </section>
        )
    }
}
