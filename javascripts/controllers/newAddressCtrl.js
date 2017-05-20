app.controller("NewAddressCtrl", function($location, $scope, AddressFactory) {

	$scope.newAddress = {};

	$scope.saveAddress = () => {
		AddressFactory.postNewAddress($scope.newAddress)
		.then(response => {$location.url("address/list"); $scope.newAddress = {};})
		.catch(error => console.log("Error in saveAddress", error));
	};

});