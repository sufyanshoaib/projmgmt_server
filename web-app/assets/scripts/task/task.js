/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 10/06/2014
 * Time: 5:07 PM
 * To change this template use File | Settings | File Templates.
 */

var taskController = angular.module('pmApp'/*, ['ProjectService']*/);

taskController.controller('TaskCreateController', ['$scope', '$routeParams', '$location', 'ProjectService', 'TaskService', 'PersonService',
    function ($scope, $routeParams, $location, ProjectService, TaskService, PersonService) {
        console.log('project list function')
        /*$scope.project = ProjectService.Project.get({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });*/

        var taskData = TaskService.CreateTask.get({projectId: $routeParams.projectId}, function (taskData) {
            $scope.project = taskData.project
            $scope.priorities = taskData.priorities
            $scope.statuses = taskData.statuses
            var task = {priority: $scope.priorities[0], status: $scope.statuses[0]}
            $scope.task = task
            $scope.assignees = PersonService.Persons.query()
        });
        /*$scope.update = function(task) {
            $scope.task = angular.copy(task);
        };*/

        $scope.taskSubmit = function(taskForm){
            console.log("$scope.task:" + TaskService)
            //$scope.saveTask = function () {
            $scope.task.projectId = $routeParams.projectId;
            var newTask = TaskService.SaveTask.save($scope.task);
            console.log("newTask: " + newTask)
            //if(newTask && newTask.id > 0){
                $location.path('projects/' + $routeParams.projectId);
            //};
        }

        console.log("Loading projects ", $scope.project);
    }]);

taskController.controller('TaskDetailController', ['$scope', '$routeParams', '$location', 'ProjectService',
    'TaskService', 'PersonService', 'CommentService',
    function ($scope, $routeParams, $location, ProjectService, TaskService, PersonService, CommentService) {

        var data = TaskService.Task.get({projectId: $routeParams.projectId, taskId: $routeParams.taskId}, function (data) {
            //console.log("Project object", data.project)
            $scope.project = data.project
            $scope.task = data.task
            $scope.comments = CommentService.Comments.get({projectId: $routeParams.projectId, taskId: $routeParams.taskId})
        });
        /*$scope.tasks = TaskService.Tasks.query({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });*/
        console.log("Loading task: ", $scope.task);
    }]);