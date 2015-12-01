angular.module('collabriApp')
    .controller('groupsCtrl', function($scope){
        $scope.groupMembers = [
            'Wyatt',
            'Allen',
            'Garrett',
            'Miguel',
            'Shah'
        ];

        $scope.basketWeaving = [
          'Marty McFly',
            'Inigo Montoya',
            'John Cena'
        ];

        $scope.mysteryInc = [
            'Shaggy',
            'Scooby',
            'Freddy',
            'Velma',
            'Daphne'
        ];

        $scope.pageTitle = 'Groups';
    });