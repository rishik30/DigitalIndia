import React from 'react';
import 'whatwg-fetch';

export default class Svg extends React.Component{
	state = {
		svgData : ""
	}

	componentDidMount() {
		fetch(this.props.src)
			.then((response)=> {
				return response.text()
			}).then((body)=> {
				this.setState({svgData: body});
				if (this.props.onLoad)
					this.props.onLoad();
			})
	}

	render() {
		var classString = 'svg-wrap '+ this.props.className
		return (
			<div onClick={this.props.onClick} className={classString} dangerouslySetInnerHTML={{__html:this.state.svgData}}/>
		)
	}

}
