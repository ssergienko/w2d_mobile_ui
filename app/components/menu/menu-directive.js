'use strict';

angular.module('w2dmApp.menu', [])
    .directive('menu', [function() {
        return {
            scope: {},
            templateUrl: 'components/menu/menu.html',
            controller: ['$scope', function ($scope) {
                var menuLeft = document.getElementById('cbp-spmenu-s1'),
                    showLeft = document.getElementById('left-menu-button'),
                    body = document.body;

                showLeft.onclick = function() {
                    classie.toggle( this, 'active' );
                    classie.toggle( menuLeft, 'cbp-spmenu-open' );
                    disableOther( 'showLeft' );
                };
                body.onclick = function(e) {
                    if (e.target.id != showLeft.id && angular.element(e.target).parent()[0].id != showLeft.id &&
                        e.target.id != menuLeft.id && angular.element(e.target).parent()[0].id != menuLeft.id)
                    {
                        disableOther('body');
                        classie.remove( menuLeft, 'cbp-spmenu-open' );
                    }
                };

                $scope.closeMenu = function($mdCloseMenu, ev) {
                    disableOther('body');
                    classie.remove( menuLeft, 'cbp-spmenu-open' );
                }

                function disableOther( button ) {
                    if( button !== 'showLeft' ) { classie.toggle( showLeft, 'disabled' ); }
                }

            }]
        }
    }]);