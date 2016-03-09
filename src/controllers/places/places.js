'use strict';

angular.module('w2dmApp.places', ['ngRoute', 'ngMaterial', 'w2dmApp.toolbar', 'w2dmApp.placesService'])
    .controller('PlacesCtrl', ['$scope', 'Places', function($scope, PlacesResource) {
        PlacesResource.get().$promise.then(function(places) {
            $scope.places = places;
        });
        $scope.noEmptyImages = function (place) {
            return place.image_url !== 'no-image.png';
        };
    }]);