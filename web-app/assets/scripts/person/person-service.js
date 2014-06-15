/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 12/06/2014
 * Time: 1:07 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* Services */

var personService = angular.module('pmApp');

personService.factory('PersonService', ['$resource',
    function ($resource) {
        //console.log('loading ProjectService')
        return {
            Persons:  $resource('person', {}, getHttpConfig())
        };

    }]);