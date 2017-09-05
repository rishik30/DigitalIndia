import React 			from 'react'

import App 				from './app'
import Home 			from './pages/home/home';

import {
	browserHistory,
	Router,
	Route,
	IndexRoute,
	IndexRedirect
} from 'react-router';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute 					component={Home} 			onEnter={onEnter}/>
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
