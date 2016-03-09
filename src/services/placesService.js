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