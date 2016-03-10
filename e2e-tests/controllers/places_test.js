'use strict';

describe('w2dmApp.places module', function() {

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