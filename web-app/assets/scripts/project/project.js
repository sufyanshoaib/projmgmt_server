/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 09/06/2014
 * Time: 5:08 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Controllers */

var projectController = angular.module('pmApp' /*, ['ProjectService']*/);

projectController.controller('ProjectList', ['$scope', 'ProjectService',
    function ($scope, ProjectService) {
        //console.log('project list function ' + ProjectService.AllProjects)
        $scope.projects = ProjectService.AllProjects.query();
        //$scope.orderProp = 'title';

        //console.log("Loading projects ", $scope.projects);
}]);


projectController.controller('ProjectDetailController', ['$scope', '$routeParams', 'ProjectService', 'TaskService',
    function ($scope, $routeParams, ProjectService, TaskService) {
        //console.log('project get function ' + ProjectService.AllProjects)

        $scope.project = ProjectService.Project.get({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });
        console.log($routeParams.projectId)
        $scope.tasks = TaskService.Tasks.query({projectId: $routeParams.projectId}, function (data) {
            console.log("tasks object" + data.length)
        });
        console.log("Loading tasks ", $scope.tasks);
    }]);


projectController.controller('ProjectCreateController', ['$scope', '$routeParams', '$location', 'ProjectService',
    function ($scope, $routeParams, $location, ProjectService) {
        /*$scope.update = function(project) {
         $scope.project = angular.copy(project);
         };*/

        $scope.projectSubmit = function(){
            var newProject = ProjectService.SaveProject.save($scope.project);
            console.log("newProject: " + newProject)
            //if(newTask && newTask.id > 0){
            $location.path('projects');
            //};
        }

        console.log("Loading projects ", $scope.project);
    }]);
