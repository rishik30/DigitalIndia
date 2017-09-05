import React, { Component } from 'react'
import Splash from '../../components/splash.jsx'

export default class Financial extends Component {

	render () {
		return (
			<main className="financial">
				<Splash bg="/img/financial/financial-splash.jpg" title="FCRA & Financials" />
				<Details />
			</main>
		)
	}
}

class Details extends Component {

	render () {
		return (
			<section className="financial-details">
				<article className="column">
					<h2>Indus Action Financials</h2>
					<ul>
						<a href="/reports/IndusAction Financial Audit 2013-14.pdf" target="_blank">
							<li>2013-14 Financial Audit Report</li>
						</a>
						<a href="/reports/Induaction financials Audit Report 14-15.pdf" target="_blank">
							<li>2014-15 Financial Audit Report</li>
						</a>
						<a href="" target="_blank"><li>2015-16 Financial Audit Report</li></a>
					</ul>
				</article>
				<article className="column">
					<h2>FCRA</h2>
					<ul>
						<a href="/reports/Audited -Prior Fcra account.pdf" target="_blank">
							<li>Prior FCRA Audit file 2015-16</li>
						</a>
						<a href="/reports/FCRA Registration-Certificate.pdf" target="_blank">
							<li>Our FCRA Certificate</li>
						</a>
						<a href="/reports/Quarterly Receipt of Foreign Contribution Q1 -2017.pdf" target="_blank">
							<li>Q1 2017 Donation receipt</li>
						</a>
						<a href="/reports/Donor letter to Indus Action 6.8.17.pdf" target="_blank">
							<li>Q1 2017 Donar confirmation letter</li>
						</a>
					</ul>
				</article>
			</section>
		)
	}
}
