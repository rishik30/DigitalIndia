import React 			from 'react'

import App 				from './app'
import Home 			from './pages/home/home';
import About 			from './pages/about/about';
import Resources 		from './pages/resources/resources';
import Events 			from './pages/events/events';
import Contact 			from './pages/contact/contact';

import {
	browserHistory,
	Router,
	Route,
	IndexRoute,
	IndexRedirect
} from 'react-router';

const routes = (
	<Router history={browserHistory}>
		<Route 			 					component={App}>
			<Route		path="/" 			component={Home} 		onEnter={onEnter}/>
			<Route		path="/about"		component={About}		onEnter={onEnter}/>
			<Route		path="/resources"	component={Resources}	onEnter={onEnter}/>
			<Route		path="/events"		component={Events}		onEnter={onEnter}/>
			<Route		path="/contact"		component={Contact}		onEnter={onEnter}/>
		</Route>
	</Router>
)

function onEnter(nextState, replace, cb) {
	try {
		document.dispatchEvent(new Event('deactivate'));
		document.dispatchEvent(new Event('scrollToTop'));
	} catch (err) {}
	let timeoutDuration = 500;
	if (nextState.location.action == "POP") {
		timeoutDuration = 0;
	}
	setTimeout(()=>{
		cb();
	}, timeoutDuration)
}

export default {routes}
