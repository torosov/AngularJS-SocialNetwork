angular.module('socialNetwork.users.authentication', [])
    .factory('authentication', ['$http', '$q', 'BASE_URL', function ($http, $q, BASE_URL) {
        function registerUser(user) {
            var deferred = $q.defer();
            $http.post(BASE_URL + 'Users/Register', user)
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function loginUser(user) {
            var deferred = $q.defer();
            $http.post(BASE_URL + 'Users/Login', user)
                .then(function (response) {
                    console.log(response.data);
                    deferred.resolve(response.data);
                }, function (err) {
                    deferred.reject(err);
                })

            return deferred.promise;
        }

        function logoutUser() {

        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logoutUser: logoutUser
        }
    }])