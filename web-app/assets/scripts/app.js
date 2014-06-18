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
                controller: "ProjectList"})
            .when('/login', {
                templateUrl: 'assets/views/login.html',
                controller: 'LoginController'
            })
            .when('/projects', {
                templateUrl: 'assets/views/project_list.html',
                controller: "ProjectList"})
            .when('/projects/create', {
                templateUrl: 'assets/views/project_create.html',
                controller: "ProjectCreateController"})
            .when('/projects/:projectId', {
                templateUrl: 'assets/views/project_detail.html' ,
                controller: 'ProjectDetailController'
            })
            .when('/projects/:projectId/tasks/create', {
                templateUrl: 'assets/views/task_create.html' ,
                controller: 'TaskCreateController'
            })
            .when('/projects/:projectId/tasks/:taskId', {
                templateUrl: 'assets/views/task_detail.html' ,
                controller: 'TaskDetailController'
            })
            .otherwise( {redirectTo : '/'})
    }]
);

pmApp.run(['$rootScope', '$http', '$location',
    function ($rootScope, $http, $location) {
        if(getCurrentUser()){
            $rootScope.isAuthenticated = true;
            $rootScope.currentUser = getCurrentUser();
        }
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
        $rootScope.$on('event:auth-loginSuccess', function () {
            console.log('loginSuccess');
        });
        $rootScope.$on('event:auth-logoutSuccess', function () {
            console.log('logout-success');
        });
        $rootScope.$on('event:auth-notAuthenticated', function () {
            console.log('not-authenticated');
        });
        $rootScope.$on('event:auth-notAuthorized', function () {
            console.log('not-authorized');
        });


    }]);
function getLocalToken() {
    console.log("gett local token:" + sessionStorage["authToken"])
    return sessionStorage["authToken"];
}
function setLocalToken(value) {
    sessionStorage["authToken"] = value;
    console.log("setting local token:" + value)
}

function getCurrentUser() {
    console.log("gett local currentUser:" + sessionStorage["currentUser"])
    return sessionStorage["currentUser"];
}
function setCurrentUser(value) {
    sessionStorage["currentUser"] = value;
    console.log("setting local currentUser:" + value)
}

function getHttpConfig(nocache) {
    return {
        cache: false,
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

