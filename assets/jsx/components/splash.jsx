import React from "react";

export default class Splash extends React.Component {
	state = {
		active: false
	};

	componentDidMount() {
		setTimeout(this._activate, 100);
		document.addEventListener("deactivate", this._deactivate);
	}

	componentWillUnmount() {
		document.removeEventListener("deactivate", this._deactivate);
	}

	render() {
		let className = this.state.active ? "active" : "";
		return (
			<section className={"splash " + (this.props.className || "") + " " + className}>
				<img src={this.props.bg} alt={this.props.title} className="splash-bg" />
				<div className="splash-text">
					<h1>{this.props.title}</h1>
					<h3>{this.props.subTitle || ""}</h3>
				</div>
			</section>
		);
	}

	_activate = () => {
		this.props.onChange && this.props.onChange(true);
		this.setState({ active: true });
	};

	_deactivate = () => {
		this.props.onChange && this.props.onChange(false);
		this.setState({ active: false });
	};
}
