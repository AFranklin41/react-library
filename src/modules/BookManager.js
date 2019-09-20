const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/books/${id}`).then(result => result.json());
	},
	getAll() {
		return fetch(`${remoteURL}/books`)
			.then(result => result.json())
			// .then(parsedResult => {
			// 	if (parsedResult.available === true) {
			// 		alert("it's true");
			// 	}
			// });
	}
};

// const registerApiManager = {
// 	createAccount: (userName, accountToCreate) =>
// 		fetch(`http://localhost:3000/users?username=${userName}`)
// 			.then(r => r.json())
// 			.then(parsedResponse => {
// 				if (parsedResponse.length === 0) {
// 					fetch("http://localhost:3000/users", {
// 						method: "POST",
// 						headers: {
// 							"Content-Type": "application/json"
// 						},
// 						body: JSON.stringify(accountToCreate)
// 					})
// 						.then(response => response.json())
// 						.then(parsedUser => {
// 							localStorage.setItem("userId", parsedUser.id);
// 						});
// 				} else {
// 					alert("Oh no! That user name already exists!");
// 				}
// 			})
// };
