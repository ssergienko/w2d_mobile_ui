'use strict';

// Declare app level module which depends on views, and components
angular.module('w2dmApp', [
  'ngRoute',
  'w2dmApp.places',
  'w2dmApp.map',
  'w2dmApp.version',
  'w2dmApp.menu',
  'ngMaterial',
  'ngMessages'
  //'material.svgAssetsCache'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/places', {
      templateUrl: 'places/places.html',
      controller: 'PlacesCtrl'
    })
    .when('/map', {
      templateUrl: 'map/map.html',
      controller: 'MapCtrl'
    })
    .otherwise({redirectTo: '/places'});
}])
.run(function ($window) {
    angular.element(document).ready(function() {
        angular.element(document.querySelector("#content")).css("height", $window.innerHeight+'px');
    });
});
