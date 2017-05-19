app.controller("addressCtrl", ($scope, AddressFactory) => {

	$scope.hello = "";
	$scope.addresses = [];

	let getAddresses = () => {
		AddressFactory.retrieveFBAddresses()
		.then(addresses => {$scope.addresses = addresses;})
		.catch(error => {console.log("Error in getAddresses", error);});
	};
	
	getAddresses();

});
