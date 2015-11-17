'use strict';
var app =
angular
    .module('collabriApp', [
        'ngAnimate',
        'ngRoute',
        'ngMaterial'

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
