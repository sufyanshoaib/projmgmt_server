/**
 * Created with IntelliJ IDEA.
 * User: raaweeinc
 * Date: 12/06/2014
 * Time: 6:58 PM
 * To change this template use File | Settings | File Templates.
 */

'use strict';

/* Controllers */

var authController = angular.module('pmApp');


authController.controller('LoginController', ['$rootScope', '$scope', '$http', 'authService',
    function ($rootScope, $scope, $http, authService) {
        console.log('loginController called');

        $scope.logIn = function () {
            console.log('logIn called');

            $http.post('auth/api/login', { "username": $scope.authData.username, "password": $scope.authData.password }, getAuthenticateHttpConfig).
                success(function (data) {
                    console.log('authentication token: ' + data.token);
                    console.log('authentication username: ' + data.username);
                    $rootScope.isAuthenticated = true;
                    $rootScope.currentUser = data.username;
                    setLocalToken(data.token);
                    authService.loginConfirmed({}, function (config) {
                        if (!config.headers["X-Auth-Token"]) {
                            console.log('X-Auth-Token not on original request; adding it');
                            config.headers["X-Auth-Token"] = getLocalToken();
                        }
                        return config;
                    });
                }).
                error(function (data) {
                    console.log('login error: ' + data);
                    $rootScope.$broadcast('event:auth-loginFailed', data);
                });
        }

        $scope.register = function () {
            console.log('register called');

            $http.post('person', { username: $scope.authData.username, password: $scope.authData.password }).
                success(function (data) {
                    console.log('success regsiter: ' + data);
                    //console.log('authentication username: ' + data.username);

                    $scope.logIn();
                }).
                error(function (data) {
                    console.log('register error: ' + data);
                });
        }
    }]);

authController.controller('LogoutController',
    function ($scope, $http, $location) {
        console.log('logoutController called');

        $scope.logOut = function() {
            console.log('logOut called');

            $http.post('api/logout', {}, getHttpConfig()).
                success(function() {
                    console.log('logout success');
                    localStorage.clear();
                    $location.path("/")
                }).
                error(function(data) {
                    console.log('logout error: ' + data);
                });
        }
    }
);


/*exampleApp.directive('showLogin', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {
            var login = element.find('#login-holder');
            var loginError = element.find('#login-error');
            var main = element.find('#content');
            var username = element.find('#username');
            var password = element.find('#password');

            login.hide();
            loginError.hide();

            scope.$on('event:auth-loginRequired', function() {
                console.log('showing login form');
                main.hide();
                username.val('');
                password.val('');
                login.show();
            });
            scope.$on('event:auth-loginFailed', function() {
                console.log('showing login error message');
                username.val('');
                password.val('');
                loginError.show();
            });
            scope.$on('event:auth-loginConfirmed', function() {
                console.log('hiding login form');
                main.show();
                login.hide();
                username.val('');
                password.val('');
            });
        }
    }
});*/
