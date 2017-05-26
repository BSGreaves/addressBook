app.controller("NewAddressCtrl", function($rootScope, $location, $scope, AddressFactory) {

	$scope.newAddress = {};

	$scope.saveAddress = () => {
		$scope.newAddress.uid = $rootScope.user.uid;
		AddressFactory.postNewAddress($scope.newAddress)
		.then(response => {$location.url("address/list"); $scope.newAddress = {};})
		.catch(error => console.log("Error in saveAddress", error));
	};

});