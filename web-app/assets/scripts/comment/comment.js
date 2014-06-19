/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 10/06/2014
 * Time: 5:07 PM
 * To change this template use File | Settings | File Templates.
 */

var commentController = angular.module('pmApp'/*, ['ProjectService']*/);

commentController.controller('CommentCreateController', ['$scope', '$routeParams', '$location', 'ProjectService', 'TaskService', 'CommentService',
    function ($scope, $routeParams, $location, ProjectService, TaskService, CommentService) {

        /*$scope.project = ProjectService.Project.get({projectId: $routeParams.projectId}, function () {
            //console.log("Project object", project.id)
        });*/

        /*var data = CommentService.CreateComment.get({taskId: $routeParams.taskId}, function (data) {
            $scope.task = data.task
        });*/
        var data = TaskService.Task.get({projectId: $routeParams.projectId, taskId: $routeParams.taskId}, function (data) {
            $scope.task = data.task
        });

        /*$scope.update = function(task) {
            $scope.task = angular.copy(task);
        };*/

        $scope.commentSubmit = function(form){

            $scope.comment.taskId = $routeParams.taskId;
            var comment = CommentService.SaveComment.save($scope.comment);
            console.log("comment: " + comment)
            $location.path('projects/' + $routeParams.projectId + '/tasks/' + $routeParams.taskId );

        }
    }]);