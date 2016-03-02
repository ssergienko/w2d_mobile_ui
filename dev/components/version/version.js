'use strict';

angular.module('w2dmApp.version', [
  'w2dmApp.version.interpolate-filter',
  'w2dmApp.version.version-directive'
])

.value('version', '0.1');
