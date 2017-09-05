import React 	from 'react';
import Svg 		from './svg.jsx';

export default class Loader extends React.Component{
	state = {
		active : false
	}

	constructor(props){
		super(props);
	}

	componentDidMount() {
		document.addEventListener("activateLoader", this._activate ,false);
		document.addEventListener("deactivateLoader", this._deactivate ,false);
		document.addEventListener("scrollToTop", this._scrollIntoView ,false);
		// this._activate();
	}

	render() {
		var classString = (this.state.active)?("active"):("")
		return (
			<div className={"loader "+classString}>
			</div>
		)
	}

	_activate = ()=> {
		requestAnimationFrame(()=>{
			this.setState({active: true});
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
		}, 500-timeDifference);
	}

	_scrollIntoView = (e)=> {
		let top = e.detail || 0;
		this._scrollTo(top, 700, 'easeInOutQuint');
	}

	_scrollTo = (scrollTargetY, speed, easing)=> {
	    var scrollY = window.scrollY,
	        scrollTargetY = scrollTargetY || 0,
	        speed = speed || 2000,
	        easing = easing || 'easeOutSine',
	        currentTime = 0;

	    // min time .1, max time .8 seconds
	    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	    var PI_D2 = Math.PI / 2,
	        easingEquations = {
	            easeOutSine: function (pos) {
	                return Math.sin(pos * (Math.PI / 2));
	            },
	            easeInOutSine: function (pos) {
	                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
	            },
	            easeInOutQuint: function (pos) {
	                if ((pos /= 0.5) < 1) {
	                    return 0.5 * Math.pow(pos, 5);
	                }
	                return 0.5 * (Math.pow((pos - 2), 5) + 2);
	            }
	        };

	    // add animation loop
	    function tick() {
	        currentTime += 1 / 60;

	        var p = currentTime / time;
	        var t = easingEquations[easing](p);

	        if (p < 1) {
	            requestAnimationFrame(tick);

	            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
	        } else {
	            window.scrollTo(0, scrollTargetY);
	        }
	    }

	    // call it once to get started
	    tick();
	}

}
