'use strict';

var app = angular.module('bma1', ['ui.bootstrap', 'ngResource']);

app.controller("FeedCtrl", ['$scope', 'Feed', function ($scope, Feed) {
    Feed.parseFeed('http://feed.eng.umd.edu/news/feed.xml').then(function (res) {
        $scope.feeds = res.data.responseData.feed.entries;
    });
}]);

app.factory('Feed', ['$http', function ($http) {
    return {
        parseFeed: function (url) {
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        }
    }
}]);

app.factory('AboutPages', function($resource) {
  return $resource("/aboutpages/:id", {id: "@id"}, {update: {method: "PUT"}});
});


var AboutPagesCtrl = function ($scope, AboutPages) {
  $scope.tabs = AboutPages.query();

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };

  $scope.navType = 'pills';
};