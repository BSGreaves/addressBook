app.controller("newAddressCtrl", function($location, $scope, AddressFactory) {

	$scope.newAddress = {};

	$scope.saveNewAddress = () => {
		AddressFactory.postNewAddress($scope.newAddress)
		.then(response => {$location.url("address/list"); $scope.newAddress = {};})
		.catch(error => console.log("Error in saveNewAddress", error));
	};

});