angular.module('socalNetwork.newsFeed', ['socialNetwork.newsFeed.feed'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newsFeed', {
            templateUrl: 'app/news-feed/news-feed.html',
            controller: 'newsFeedCtrl'
        })
    }])
    .controller('newsFeedCtrl', ['$scope', 'feed', function ($scope, feed) {
        feed.latest()
            .then(function (latestFeed) {
                console.log(latestFeed);
                $scope.latestFeed = latestFeed;
            })
    }])