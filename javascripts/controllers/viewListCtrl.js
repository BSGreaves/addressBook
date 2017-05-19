app.controller("viewListCtrl", function($scope, AddressFactory) {
	
	$scope.addresses = [];

	let getAddresses = () => {
		AddressFactory.retrieveFBAddresses()
		.then(addresses => {$scope.addresses = addresses; console.log($scope.addresses);})
		.catch(error => {console.log("Error in getAddresses", error);});
	};

	getAddresses();

});
