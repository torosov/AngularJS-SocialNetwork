angular.module('socialNetwork.home', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/',{
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        })
    }])
    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.login= function (user) {
            console.log(user);
        };

        $scope.register= function (user) {
            console.log(user);
        };
    }]);