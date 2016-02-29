/**
 * Created by Sergei_Sergienko on 2/29/2016.
 */
'use strict';

angular.module('w2dmApp.toolbar', ['ngMaterial'])
    .directive('toolbar', [function() {
        return {
            scope: {},
            templateUrl: 'components/toolbar/toolbar.html',
            controller: ['$scope', function ($scope) {
                var originatorEv;
                $scope.openMenu = function($mdOpenMenu, ev) {
                    originatorEv = ev;
                    $mdOpenMenu(ev);
                }
            }]
        };
    }]);