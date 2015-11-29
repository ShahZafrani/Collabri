/**
 * Created by Shah Zain on 11/17/2015.
 */
angular.module('collabriApp')
    .directive('sidenav', function(){
       return {
           restrict: 'E',
           controller: 'sidenavCtrl',
           templateUrl: 'views/sidenav.html'
       }
    });