app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
	$routeProvider
	.when("/address/list", {
		templateUrl: "partials/address-list.html",
		controller: "viewListCtrl"
	})
	.when("/address/new",  {
		templateUrl: "partials/new-address.html",
		controller: "newAddressCtrl"
	})
	.otherwise("/address/list");
});