angular.module('collabriApp')
    .controller('groupsCtrl', function($scope){
        $scope.ucdProgress = [
            'Miguel Betancourt updated Design Doc',
            'Garrett Noll complete task Sketch Interface',
            'Wyatt Schafer scheduled new Group Meeting'
        ];

        $scope.basketProgress = [
          'Marty McFly completed task Travel Time',
            'Inigo Montoya updated Name Tag',
            'John Cena complete task Become WWE Heavyweight Champion'
        ];

        $scope.mysteryProgress = [
            'Shaggy updated Grocery List',
            'Scooby completed task Eat Scooby Snacks',
            'Velma added new task Find My Glasses'
        ];

        $scope.pageTitle = 'Groups';
    });