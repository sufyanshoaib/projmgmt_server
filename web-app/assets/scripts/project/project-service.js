/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 09/06/2014
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Services */

var projectService = angular.module('pmApp');

projectService.factory('ProjectService', ['$resource',
    function ($resource) {
         //console.log('loading ProjectService')
        return {
            AllProjects: $resource('api/projects', {}, getHttpConfig(), {cache:false}),
            Project: $resource('api/projects/:projectId', {projectId: '@projectId'}, getHttpConfig()),
            SaveProject: $resource('api/projects/', {}, {save: {method: 'POST' }}, getHttpConfig())
            /*PostComments: $resource('v1/posts/:postId/comments', {postId: '@id'}),
            PostTags: $resource('v1/posts/tags/:tag', {tag: '@id'})*/
        };

    }]);