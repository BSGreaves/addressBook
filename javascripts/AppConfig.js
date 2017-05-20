app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
	$routeProvider
	.when("/address/list", {
		templateUrl: "partials/address-list.html",
		controller: "ViewListCtrl"
	})
	.when("/address/new",  {
		templateUrl: "partials/new-address.html",
		controller: "NewAddressCtrl"
	})
	.when("/address/edit/:id",  {
		templateUrl: "partials/new-address.html",
		controller: "EditAddressCtrl"
	})
	.otherwise("/address/list");
});