/**
 * Created by Sergei_Sergienko on 2/29/2016.
 */
'use strict';

angular.module('w2dmApp')
    .directive('toolbar', [function() {
        return {
            scope: {},
            templateUrl: 'components/toolbar/toolbar.html',
            transclude: true,
            replace: true,
            controller: ['$scope', function ($scope) {
                var originatorEv;
                $scope.openMenu = function($mdOpenMenu, ev) {
                    originatorEv = ev;
                    $mdOpenMenu(ev);
                }
            }]
        };
    }]);