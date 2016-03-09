'use strict';

angular.module('w2dmApp')
    .controller('PlacesCtrl', ['$scope', 'placesService', function($scope, placesService) {
        placesService.get().$promise.then(function(places) {
            $scope.places = places;
        });
        $scope.noEmptyImages = function (place) {
            return place.image_url !== 'no-image.png';
        };
    }]);