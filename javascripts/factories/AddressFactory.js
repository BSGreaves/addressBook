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

	let postNewAddress = newAddress => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
			.then(result => resolve(result))
			.catch(error => reject(error));
		});
	};

	let editAddress = edittedAddress => {
		let deleteID = edittedAddress.id;
		delete edittedAddress.id;
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${deleteID}.json`, JSON.stringify(edittedAddress))
			.then(result => resolve(result))
			.catch(error => reject(error));
		});
	};

	let getSingleAddress = id => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
			.then(fbAddress => {
				fbAddress = fbAddress.data;
				fbAddress.id = id;
				resolve(fbAddress);
			})
			.catch(error => {reject(error);});
		});
	};

	let deleteAddress = id => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
			.then(data => resolve(data))
			.catch(error => reject(error));
		});
	};

	return {deleteAddress: deleteAddress, retrieveFBAddresses: retrieveFBAddresses, postNewAddress: postNewAddress, getSingleAddress: getSingleAddress, editAddress: editAddress};
});