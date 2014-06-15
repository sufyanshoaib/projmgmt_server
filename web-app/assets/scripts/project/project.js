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
        console.log('project list function ' + ProjectService.AllProjects)
        $scope.projects = ProjectService.AllProjects.query();
        //$scope.orderProp = 'title';

        console.log("Loading projects ", $scope.projects);
}]);


projectController.controller('ProjectDetailController', ['$scope', '$routeParams', 'ProjectService', 'TaskService',
    function ($scope, $routeParams, ProjectService, TaskService) {
        console.log('project get function ' + ProjectService.AllProjects)

        $scope.project = ProjectService.Project.get({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });
        console.log($routeParams.projectId)
        $scope.tasks = TaskService.Task.query({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });
        console.log("Loading projects ", $scope.project);
    }]);
