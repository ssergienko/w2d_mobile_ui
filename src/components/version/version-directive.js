'use strict';

angular.module('w2dmApp')
  .directive('version-directive', function() {
    return function(scope, elm, attrs) {
      elm.text(appVersion);
    };
  });