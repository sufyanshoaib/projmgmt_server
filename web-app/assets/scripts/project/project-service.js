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
            AllProjects: $resource('apiv1/project', {}),
            Project: $resource('api/project/:projectId', {projectId: '@projectId'})
            /*PostComments: $resource('v1/posts/:postId/comments', {postId: '@id'}),
            PostTags: $resource('v1/posts/tags/:tag', {tag: '@id'})*/
        };

    }]);