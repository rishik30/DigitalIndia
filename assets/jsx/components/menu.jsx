import React from "react";
import Svg from "./svg.jsx";
import { IndexLink, Link } from "react-router";

export default class Menu extends React.Component {
	state = {
		active: false
	};

	render() {
		let activeString = this.state.active ? "active" : "";
		return (
			<div className={"menu-wrapper " + activeString}>
				<div className="hamburger" onClick={this._toggleMenu}>
					<Svg src="/img/general/menu-icon.svg" />
				</div>
				<ul className={"menu-list " + activeString}>
					<li>
						<Link activeClassName="active" to="/" onClick={this._toggleMenu}>
							<img src="/img/general/indus-logo.png" className="logo" />
						</Link>
					</li>
					<div className={"menu-items " + activeString}>
						<li className="menu-item">
							<Link to="/about" activeClassName="active" onClick={this._toggleMenu}>
								About
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/projects" activeClassName="active" onClick={this._toggleMenu}>
								Projects
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/publications" activeClassName="active" onClick={this._toggleMenu}>
								Publications
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/careers" activeClassName="active" onClick={this._toggleMenu}>
								Careers
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/donate" activeClassName="active" onClick={this._toggleMenu}>
								Donate
							</Link>
						</li>
						{/* <li className="menu-item">
                            <Link to="/contact" activeClassName="active">Contact</Link>
                        </li> */}
						{/* <div className="to-right">

                        </div> */}
						<ul className="social-icons">
							<li className="social-icon-item">
								<a href="https://www.linkedin.com/company/indusaction" target="_blank">
									<Svg src="/img/general/linkedin-icon.svg" className="social-icon" />
								</a>
							</li>
							<li className="social-icon-item">
								<a href="https://www.facebook.com/INDUSaction/" target="_blank">
									<Svg src="/img/general/fb-icon.svg" className="social-icon" />
								</a>
							</li>
							<li className="social-icon-item">
								<a href="https://twitter.com/indusaction?lang=en" target="_blank">
									<Svg src="/img/general/twitter-icon.svg" className="social-icon" />
								</a>
							</li>
						</ul>
					</div>
				</ul>
			</div>
		);
	}

	_toggleMenu = () => {
		if (this.state.active) {
			this.setState({ active: false });
		} else {
			this.setState({ active: true });
		}
	};
}
