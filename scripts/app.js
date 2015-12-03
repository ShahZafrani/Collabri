'use strict';
var app =
angular
    .module('collabriApp', [
        'ngAnimate',
        'ngRoute',
        'ngMaterial',
        'ui.calendar'

    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'mainCtrl',
                controllerAs: 'main'
            })
            .when('/Groups', {
                templateUrl: 'views/groups.html',
                controller: 'groupsCtrl',
                controllerAs: 'groups'
            })
            .when('/Files', {
                templateUrl: 'views/files.html',
                controller: 'filesCtrl',
                controllerAs: 'files'
            })
            .when('/Schedule', {
                templateUrl: 'views/schedule.html',
                controller: 'scheduleCtrl',
                controllerAs: 'schedule'
            })
            .when('/Meetings', {
                templateUrl: 'views/meetings.html',
                controller: 'meetingsCtrl',
                controllerAs: 'meetings'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('orange');
    });
