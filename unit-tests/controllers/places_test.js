'use strict';

describe('Places controller', function() {

  beforeEach(module('w2dmApp'));

  describe('places controller', function(){

    var scope, PlacesCtrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      PlacesCtrl = $controller('PlacesCtrl', {$scope: scope});
    }));

    it('have to be defined', inject(function() {
      expect(PlacesCtrl).toBeDefined();
    }));

  });
});