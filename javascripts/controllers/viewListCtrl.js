app.controller("ViewListCtrl", function($rootScope, $scope, AddressFactory) {
	
	$scope.addresses = [];

	let getAddresses = () => {
		AddressFactory.retrieveFBAddresses($rootScope.user.uid)
		.then(addresses => {$scope.addresses = addresses;})
		.catch(error => {console.log("Error in getAddresses", error);});
	};

	getAddresses();

	$scope.deleteAddress = (id) => {
		AddressFactory.deleteAddress(id)
		.then(() => getAddresses())
		.catch(error => console.log("Error in deleteAddress", error));
	};

});
