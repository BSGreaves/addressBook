app.controller("EditAddressCtrl", function($location, $routeParams, $scope, AddressFactory) {

	$scope.newAddress = {};

	AddressFactory.getSingleAddress($routeParams.id)
	.then(result => {$scope.newAddress = result;})
	.catch(error => console.log("error in getSingleAddress", error));

	$scope.saveAddress = () => {
		AddressFactory.editAddress($scope.newAddress)
		.then(response => {$location.url("address/list"); $scope.newAddress = {};})
		.catch(error => console.log("Error in saveAddress", error));
	};

});