'use strict';

describe('w2dmApp.version module', function() {
  beforeEach(module('w2dmApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
