app.controller("ViewListCtrl", function($scope, AddressFactory) {
	
	$scope.addresses = [];

	let getAddresses = () => {
		AddressFactory.retrieveFBAddresses()
		.then(addresses => {$scope.addresses = addresses;})
		.catch(error => {console.log("Error in getAddresses", error);});
	};

	getAddresses();

	$scope.deleteAddress = (id) => {
		console.log("Inside DeleteAddress");
		AddressFactory.deleteAddress(id)
		.then(() => getAddresses())
		.catch(error => console.log("Error in deleteAddress", error));
	};

});
