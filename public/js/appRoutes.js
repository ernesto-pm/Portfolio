angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})

		;

	$locationProvider.html5Mode(true);

}]);