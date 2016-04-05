'use strict';

angular.module('myModule', ['ngRoute']);


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'angular-loading-bar',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.users'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
