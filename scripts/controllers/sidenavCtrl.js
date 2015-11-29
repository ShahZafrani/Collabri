/**
 * Created by Shah Zain on 11/17/2015.
 */
angular.module('collabriApp')
    .controller('sidenavCtrl', function($scope, $location){
        $scope.links = [
            'Groups',
            'Files',
            'Schedule',
            'Meetings'
        ];
        $scope.openLink = openLink;
        function openLink(link){
            var path = "/" + link;
            $location.path(path);
        }
        $scope.isCurrentLocation = isCurrentLocation;
        function isCurrentLocation(link){
            var location = $location.path();
            return (location.indexOf(link) > 0);
        }

    });