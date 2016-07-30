/**
 * Created by Sergei_Sergienko on 3/9/2016.
 */
angular.module('w2dmApp')
  .factory('placesService',['$resource', function ($resource) {
    return $resource('http://api.way2day.ru/api/places', {},
      {
        'get': { method:'GET', isArray: true }
      }
    );
}]);
