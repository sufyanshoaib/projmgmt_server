/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 09/06/2014
 * Time: 5:13 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Services */

var commentService = angular.module('pmApp');

commentService.factory('CommentService', ['$resource',
    function ($resource) {
        //console.log('loading ProjectService')
        return {
            Comments: $resource('api/project/:projectId/task/:taskId/comment', {projectId: '@projectId', taskId: '@taskId'}, getHttpConfig()),
            /*PostComments: $resource('v1/posts/:postId/comments', {postId: '@id'}),
             PostTags: $resource('v1/posts/tags/:tag', {tag: '@id'})*/
            SaveComment: $resource('api/comment/', {}, {save: {method: 'POST' }}, getHttpConfig()),
            //CreateComment: $resource('api/comment/create', {taskId: '@taskId'}, getHttpConfig() )
        };

    }]);