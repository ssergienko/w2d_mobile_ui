'use strict';

angular.module('w2dmApp.menu', ['ngMaterial'])
    .config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
            .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
    })
    .controller('MenuCtrl', [function() {
        var originatorEv;
        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
    }]);