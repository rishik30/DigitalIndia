import "whatwg-fetch";
const BASE_ENDPOINT = "https://cms.soch.io/api/v1";

let _helper = {
	_dataStore: {},

	fetchPOST: function(endpoint, dataToBeSent, cb, method) {
		if (!dataToBeSent.token && localStorage.token) {
			dataToBeSent.token = localStorage.token;
		}
		fetch(BASE_ENDPOINT + endpoint, {
			method: method || "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(dataToBeSent)
		})
			.then(response => {
				return response.json();
			})
			.then(json => {
				cb(!json.success, json);
			});
	},

	fetchGET: function(endpoint, cb) {
		fetch(BASE_ENDPOINT + endpoint + "?token=" + localStorage.token)
			.then(response => {
				return response.json();
			})
			.then(json => {
				cb(!json.success, json);
			});
	}
};

export { _helper };
