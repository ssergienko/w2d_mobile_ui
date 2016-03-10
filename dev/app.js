'use strict';

// Declare app level module which depends on views, and components
angular.module('w2dmApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'ngResource'
])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/places', {
            templateUrl: 'controllers/places/places.html',
            controller: 'PlacesCtrl'
        })
        .when('/map', {
            templateUrl: 'controllers/map/map.html',
            controller: 'MapCtrl'
        })
        .otherwise({redirectTo: '/places'});
}])
.run(function ($window, $rootScope) {
    angular.element(document).ready(function() {
        angular.element(document.querySelector("#content")).css("height", $window.innerHeight+'px');
    });
    $rootScope.lifeSiteUrl = 'way2day.ru';
});