angular.module('socialNetwork.users.identity', [])
    .factory('identity', ['$http', '$q', 'BASE_URL', function ($http, $q, BASE_URL) {

        var deferred = $q.defer();

        var currentUser = undefined;

        var accessToken = 't4SQuCX2rb-EIjhIjh-N4cKXXaK9HT8skxt-98NHsyUHL70uqQbEpK70SNJHYFXJp7nai63bC0dx_Q656b7pX9S6NNDck6qEIoeT0RT798Zn-TZ74591jWAHQ2rJsu6MtEdAK5sPXvMCDynQhjA841CtgTtaB1rzKRyiYYiq4x9sRRylak4dokgFzZwwQ92m35WscXtldFej3CoPxF4kKevZOA0lzQSuZhNvN21AEGDT6suxZzM_SEGQ8d1sKnttWtxL_ZDsnWaRXqZZtdzYILyVHK3W6TPwlBuVFcJVP3MN5s7RrBTJvs4EY_MpGjC_F_-8uJbet9jDqb518N1AAzf6yWAsfCLmx4_SckUVsysScrqoqxETazrTyenRDYUBHXi8MnhYctugxsnmBSaHs84fCcIeQpE-O73F25gFn9fhsLGxGXpUfsmuyNAQUTBbklMal7eMla3iSbQe1ygvouAqiIRlbUPyDe0iKcyT5BfvqdoWOpQKVYS7XP8Ndqdt';

        $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;

        $http.get(BASE_URL + '/me')
            .then(function (response) {
                currentUser = response.data;
                deferred.resolve(currentUser);
            })


        var username = 'bobcho';

        return {
            getCurrentUser: function () {
                if (currentUser) {
                    return $q.when(currentUser)
                } else {
                    return deferred.promise;
                }

            },
            isAuthenticated: function () {
                return true;
            }
        }
    }])