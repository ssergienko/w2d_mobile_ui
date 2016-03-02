'use strict';

describe('w2dmApp.map module', function() {

  beforeEach(module('w2dmApp.map'));

  describe('map controller', function() {

    var scope, MapCtrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      MapCtrl = $controller('MapCtrl', {$scope: scope});
    }));

    it('have to be defined', inject(function() {
      expect(MapCtrl).toBeDefined();
    }));

  });
});