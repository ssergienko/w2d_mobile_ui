/**
 * Created by Sergei_Sergienko on 3/9/2016.
 */
'use strict';

angular.module('w2dmApp')
    .directive('placeDirective', [function() {
        return {
            scope: true,
            templateUrl: 'components/place/place.html',
            controller: ['$scope', function ($scope) {

            }]
        }
    }]);