import React, { Component } from "react";
import Svg from "./svg.jsx";
import { Link } from "react-router";

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<FooterContent />
				<Copyright />
			</footer>
		);
	}
}

class FooterContent extends Component {
	render() {
		return (
			<div className="footer-content">
				<div className="address column">
					<img src="/img/general/indus-logo.png" />
					<ul className="social-icons">
						<li className="icon">
							<a href="https://www.linkedin.com/company/indusaction" target="_blank">
								<Svg src="/img/general/linkedin-icon.svg" className="social-icon" />
							</a>
						</li>
						<li className="icon">
							<a href="https://www.facebook.com/INDUSaction/" target="_blank">
								<Svg src="/img/general/fb-icon.svg" />
							</a>
						</li>
						<li className="icon">
							<a href="https://twitter.com/indusaction?lang=en" target="_blank">
								<Svg src="/img/general/twitter-icon.svg" />
							</a>
						</li>
					</ul>
				</div>
				<div className="contact column">
					<div className="office-addresses">
						<div className="office">
							<h4>working office</h4>
							<p>K-112, 1st Floor, B K Dutt Colony, Jor Bagh Road,<br />New Delhi - 110003</p>
						</div>
						<div className="office">
							<h4>registered office</h4>
							<p>B-19, Defence Colony,<br />New Delhi - 110024</p>
						</div>
					</div>
					<p className="mail">
						For any queries, you can write to us at
						{" "}
						<a href="mailto:support@indusaction.org">support@indusaction.org</a>
					</p>
				</div>
				<div className="cta column">
					<Link to="/contact"><button>contact us</button></Link>
					<Link to="/donate"><button>donate now</button></Link>
					<Link to="/fcra-and-financial"><button>FCRA & Financial</button></Link>
				</div>
			</div>
		);
	}
}

class Copyright extends Component {
	render() {
		return (
			<section className="copyright">
				<p>copyright © {new Date().getFullYear()} indus action. all rights reserved.</p>
				<p className="right">
					developed and designed by
					{" "}
					<a href="http://sochtechnologies.com/" target="blank">soch technologies</a>
				</p>
			</section>
		);
	}
}
