// require("es6-promise").polyfill();
// require("universal-fetch");
//
// import { _helper } from "./_helper.js";
//
// const websiteID = "5954efe3f2ebb40ea7f794b4";
//
// const WebsiteAPI = {
// 	_dataStore: {},
//
// 	getWebsite: function(nextState, replace, cb) {
// 		return fetch("https://cms.soch.io/api/v1/websites/" + websiteID)
// 			.then(response => response.json())
// 			.then(json => {
// 				console.log(json);
// 				return json.data;
// 			})
// 			.catch(err => {
// 				console.log(err);
// 			});
// 	},
//
// 	getPage: function(website, title) {
// 		let returnPage = undefined;
// 		website.pages.map((page, i) => {
// 			if (page.title == title) {
// 				returnPage = page;
// 				return;
// 			}
// 		});
// 		return returnPage;
// 	}
// };
//
// export default WebsiteAPI;
