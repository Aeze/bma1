'use strict';

var App = angular.module('bma1', ['ui.bootstrap']);

App.controller("FeedCtrl", ['$scope', 'Feed', function ($scope, Feed) {
    Feed.parseFeed('http://feed.eng.umd.edu/news/feed.xml').then(function (res) {
        $scope.feeds = res.data.responseData.feed.entries;
    });
}]);

App.factory('Feed', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);