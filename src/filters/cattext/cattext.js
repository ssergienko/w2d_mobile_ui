/**
 * Created by Sergei_Sergienko on 3/10/2016.
 */
angular.module('w2dmApp')
    .filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            var newvalue = value.substr(0, max);
            if (wordwise) {
                var lastspace = newvalue.lastIndexOf(' ');
                if (lastspace != -1) {
                    newvalue = newvalue.substr(0, lastspace);
                }
            }

            return newvalue + (tail || ' …');
        };
    });