angular.module('collabriApp')
    .controller('scheduleCtrl', function($scope){

        $scope.pageTitle = 'Schedule';

        $scope.eventSources = [
            {
                title: 'Final Presentation: UCD',
                start: '2015-12-03'
            },
            {
                title: 'Turn Up!',
                start: '2015-12-08'
            }
        ];

        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: $scope.alertEventOnClick,
                eventDrop: $scope.alertOnDrop,
                eventResize: $scope.alertOnResize
            }
        };

    });