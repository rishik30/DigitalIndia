import React, {Component} from 'react'
import Svg from '../../components/svg.jsx'

export class SupportUs extends Component {

    render() {
        let { data } = this.props
        let partnerships = (data) ? (data.partnerships.items) : [ "Media connects", "Connect with community based partners", "Information dissemination through the support of corporate volunteers" ]
        let operations = (data) ? (data.operations.items) : [ "Administrative support (office supplies, printing costs or connects etc.)", "Office and training space", "Customer relation and Management Support" ]
        return(
            <section className="support-us">
                <h2>you can support us through the following options</h2>
                <div className="info">
                    <article className="info-card">
                        <header>
                            <Svg src="/img/donate/donate_partnerships.svg" />
                            <h4>partnerships</h4>
                        </header>
                        <ul>
                            { partnerships.map((item, i) => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </article>
                    <article className="info-card">
                        <header>
                            <Svg src="/img/donate/donate_operations.svg" />
                            <h4>operations</h4>
                        </header>
                        <ul>
                            { operations.map((item, i) => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </article>
                </div>
            </section>
        )
    }
}
