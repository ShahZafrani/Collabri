angular.module('collabriApp')
    .controller('groupsCtrl', function($scope){
        $scope.groupMembers = [
            'Wyatt',
            'Allen',
            'Garrett',
            'Miguel',
            'Shah'
        ];
        $scope.pageTitle = 'Groups';
    });