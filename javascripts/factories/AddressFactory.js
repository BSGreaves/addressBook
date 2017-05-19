app.factory("AddressFactory", function($http, $q, FIREBASE_CONFIG) {

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

	return {retrieveFBAddresses: retrieveFBAddresses};
});