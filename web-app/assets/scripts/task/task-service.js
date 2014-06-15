/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 09/06/2014
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Services */

var taskService = angular.module('pmApp');

taskService.factory('TaskService', ['$resource',
    function ($resource) {
        //console.log('loading ProjectService')
        return {
            Task: $resource('api/project/:projectId/tasks', {projectId: '@projectId'}, getHttpConfig()),
            /*PostComments: $resource('v1/posts/:postId/comments', {postId: '@id'}),
             PostTags: $resource('v1/posts/tags/:tag', {tag: '@id'})*/
            SaveTask: $resource('api/task/', {}, {save: {method: 'POST' }}, getHttpConfig()),
            CreateTask: $resource('api/task/create', {projectId: '@projectId'}, getHttpConfig() )
        };

    }]);