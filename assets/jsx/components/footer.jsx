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
				<div className="logo column">
					<img src='' />
				</div>
				<div className='contact-info column'>
					<ul>
						<li>
							<img src='' />
							<img src='' />
						</li>
						<li>
							<img src='' />
							<p> contact@digitalindiafoundation.org </p>
						</li>
						<li>
							<img src='' />
							<p> G-46, Sector 3, Noida - 201301 </p>
						</li>
					</ul>
				</div>
				<div className="cta column">
					<Link to="/"> Home </Link>
					<Link to="/"> About </Link>
					<Link to="/"> Resources </Link>
					<Link to="/"> Events </Link>
				</div>
			</div>
		);
	}
}

class Copyright extends Component {
	render() {
		return (
			<section className="copyright">
				<p>copyright {new Date().getFullYear()} Digital India Foundation</p>
				{/* <p className="right">
					developed and designed by
					{" "}
					<a href="http://sochtechnologies.com/" target="blank">soch technologies</a>
				</p> */}
			</section>
		);
	}
}
