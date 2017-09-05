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
							<Link to="/" activeClassName="active" onClick={this._toggleMenu}>
								Home
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/about" activeClassName="active" onClick={this._toggleMenu}>
								About
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/resources" activeClassName="active" onClick={this._toggleMenu}>
								Resources
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/events" activeClassName="active" onClick={this._toggleMenu}>
								Events
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/contact" activeClassName="active" onClick={this._toggleMenu}>
								Contact
							</Link>
						</li>
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
