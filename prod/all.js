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
.run(function ($window) {
    angular.element(document).ready(function() {
        angular.element(document.querySelector("#content")).css("height", $window.innerHeight+'px');
    });
});
/**
 * Created by Sergei_Sergienko on 3/9/2016.
 */
angular.module('w2dmApp')
    .factory('placesService',['$resource', function ($resource) {
        return $resource('http://devel.way2day.ru/api/places/getbycoords?lat=59.939095&lng=30.315868&_=1457518554341', {},
            {
                'get': {method:'GET', isArray: true }
            }
        );
}]);
'use strict';

angular.module('w2dmApp')
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
'use strict';

angular.module('w2dmApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

'use strict';

angular.module('w2dmApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

'use strict';

angular.module('w2dmApp.version', [
  'w2dmApp.version.interpolate-filter',
  'w2dmApp.version.version-directive'
])

.value('version', '0.1');

'use strict';

angular.module('w2dmApp')
    .controller('MapCtrl', ['$scope', function($scope) {

    }]);
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