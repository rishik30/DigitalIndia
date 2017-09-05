import React 	from 'react';
import Svg 		from './svg.jsx';

export default class Modal extends React.Component{
	state = {
		active : false,
		disabled: true,
	}

	constructor(props){
		super(props);
	}

	componentDidMount() {
		document.addEventListener("activateModal", this._activate ,false);
		document.addEventListener("deactivateModal", this._deactivate ,false);
	}

	render() {
		var activeString = (this.state.active)?("active"):("")
		var disabledString = (this.state.disabled)?("disabled"):("")
		return (
			<div className={"modal " + activeString + " " + disabledString}>
				<div onClick={this._deactivate} className="overlay"/>
				<div className="modal-content">
					<Svg src="/img/general/cross.svg" onClick={this._deactivate} className="cross-icon"/>
					{this._children}
    			</div>
			</div>
		)
	}

	_activate = (e)=> {
		this._children = e.detail;
		this.setState({disabled: false});
		setTimeout(()=>{
			this.setState({active: true});
		}, 100)
	}

	_deactivate = ()=> {
		this.setState({active: false});
		setTimeout(()=>{
			this.setState({disabled: true});
		}, 1000)
	}
}
