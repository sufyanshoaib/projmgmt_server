'use strict';

/**
 * @ngdoc overview
 * @name projmgmtClintApp
 * @description
 * # projmgmtClintApp
 *
 * Main module of the application.
 */
var pmApp = angular
  .module('pmApp', [
    /*'ngAnimate',
    'ngCookies',*/
    'ngResource',
    /*'ngSanitize',
    'ngTouch'*/
    'http-auth-interceptor',
    'ngRoute'
  ]);

pmApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'assets/views/project_list.html',
                controller: "ProjectDetailController"})
            .when('/login', {
                templateUrl: 'assets/views/login.html',
                controller: 'LoginController'
            })
            .when('/projects', {
                templateUrl: 'assets/views/project_list.html',
                controller: "ProjectList"})
            .when('/projects/:projectId', {
                templateUrl: 'assets/views/project_detail.html' ,
                controller: 'ProjectDetailController'
            })
            .when('/projects/:projectId/tasks/create', {
                templateUrl: 'assets/views/task_create.html' ,
                controller: 'TaskCreateController'
            })

            .otherwise( {redirectTo : '/'})
    }]
);

pmApp.run(['$rootScope', '$http', '$location',
    function ($rootScope, $http, $location) {
        $http.defaults.headers.common['X-AUTH-TOKEN'] = getLocalToken();
         console.log("local token:" + getLocalToken())
        $rootScope.$on('event:auth-loginRequired', function () {
            console.log('showing login form');
            $location.path('/login');
        });
        $rootScope.$on('event:auth-loginFailed', function () {
            console.log('showing login error message');
            $('#login-error').show();
        });
        $rootScope.$on('event:auth-loginConfirmed', function () {
            console.log('redirecting to home');
            $http.defaults.headers.common['X-AUTH-TOKEN'] = getLocalToken();
            $location.path('/');
        });
        $rootScope.$on('event:auth-logoutRequest', function () {
            console.log('Logging out user');
            delete $http.defaults.headers.common["X-AUTH-TOKEN"]
            $rootScope.isAuthenticated = false;
            $rootScope.currentUser = null;
            sessionStorage.clear();
            $location.path("/login")
        });
    }]);
function getLocalToken() {
    return localStorage["authToken"];
}

function getHttpConfig() {
    return {
        headers: {
            'X-Auth-Token': getLocalToken()
        }
    };
}

function getAuthenticateHttpConfig() {
    return {
        ignoreAuthModule: true
    };
}

