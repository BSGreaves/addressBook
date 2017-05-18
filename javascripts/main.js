app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("addressCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

	let retrieveFBAddresses = () => {
		let finalAddresses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json`)
			.then(fbAddresses => {
				fbAddresses = fbAddresses.data;
				Object.keys(fbAddresses).forEach(address => {
					fbAddresses[address].id = address;
					finalAddresses.push(fbAddresses[address]);
					resolve(finalAddresses);
				});
			})
			.catch(error => {reject(error);});
		});
	};

	let getAddresses = () => {
		retrieveFBAddresses()
		.then(addresses => {$scope.addresses = addresses;})
		.catch(error => {console.log("Error in getAddresses", error);});
	};

	$scope.hello = "";
	$scope.addresses = [];

	getAddresses();

});

