import React, { Component } from "react";
import Svg from "../../components/svg.jsx";

export class HowCanYouContribute extends Component {
	render() {
		let { data } = this.props
		return (
			<section className="how-can-you-contribute">
				<Svg src="/img/donate/donate.svg" className="donate-icon" />
				<div className="text">
					<h2>how can you contribute ?</h2>
					{ this._renderText(data) }
					<div className="bank-details">
						<article>
							<h4>bank details</h4>
							{ this._renderBankDetails(data) }
						</article>
						<article>
							<h4>cheques / demand draft</h4>
							{ this._renderChequeDetails(data) }
						</article>
					</div>
				</div>
			</section>
		);
	}

	_renderChequeDetails = (data) => {
		if (data) {
			return <p dangerouslySetInnerHTML={{__html: data.cheques}} />
		} else {
			return (
				<div>
					<p>In the name of "INDUS ACTION INITIATIVES", payable at New Delhi.</p>
					<p className="bold">Please mention your PAN Card no. on the letter or at the back of the cheque.</p>
				</div>
			)
		}
	}

	_renderBankDetails = (data) => {
		if (data) {
			return <p dangerouslySetInnerHTML={{__html: data.bankDetails}} />
		} else {
			return (
				<div>
					<p>INDUS ACTION INITIATIVES, HDFC Bank, South-Extension Part-2, New Delhi</p>
					<br />
					<p>Account No   : 50200002181824</p>
					<p>Branch Code  : 0319</p>
					<p>IFSC Code    : HDFC0000319</p>
				</div>
			)
		}
	}

	_renderText = (data) => {
		if (!data) {
			return (
				<div>
					<p>
						INDUS ACTION is a registered not for profit organization. We provide certificate for Tax Exemption under 80G of the Income Tax Act 1961.
						{" "}
					</p>
					<br />
					<p>We are <strong>FCRA Certified</strong></p>
					<p className="bold">You can donate via Cheque / Demand Draft / Direct Bank Transfer.</p>
				</div>
			)
		} else {
			return <div dangerouslySetInnerHTML={{__html: data.howCanYouContribute}} />

		}
	}

}
