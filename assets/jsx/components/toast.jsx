import React 	from 'react';
import Svg 		from './svg.jsx';

export default class Toast extends React.Component{
	state = {
		active : false,
		message: "This is a toast message"
	}

	constructor(props){
		super(props);
	}

	componentDidMount() {
		document.addEventListener("activateToast", this._activate ,false);
	}

	render() {
		var classString = (this.state.active)?("active"):("")
		return (
			<div className={"toast "+classString}>
				<h1>{this.state.message}</h1>
			</div>
		)
	}

	_activate = (e)=> {
		requestAnimationFrame(()=>{
			this.setState({active: true, message: e.detail});
			this._timeout = setTimeout(this._deactivate, 1500);
			this._timestamp = new Date();
		})
	}

	_deactivate = ()=> {
		let timeDifference = new Date() - this._timestamp;
		setTimeout(()=>{
			requestAnimationFrame(()=>{
				this.setState({active: false});
				document.dispatchEvent(new Event("loaded"));
				if (this._timeout) clearTimeout(this._timeout);
			})
		}, 1000-timeDifference);
	}
}
