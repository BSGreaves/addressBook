app.run((FIREBASE_CONFIG) => {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("helloCtrl", ($scope, FIREBASE_CONFIG) => {
	$scope.hello = "FIREBASE_CONFIG";
});

