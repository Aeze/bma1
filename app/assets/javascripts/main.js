'use strict';

var app = angular.module('bma1', ['ui.bootstrap', 'ngResource']);

app.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
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

app.factory('Personnel', function($resource) {
  return $resource("/personnels/:id", {id: "@id"}, {update: {method: "PUT"}});
});

app.controller("FeedCtrl", ['$scope', 'Feed', function ($scope, Feed) {
    Feed.parseFeed('http://feed.eng.umd.edu/news/feed.xml').then(function (res) {
        $scope.feeds = res.data.responseData.feed.entries;
    });
}]);

var PersonnelCtrl = function($scope, Personnel) {
  $scope.personnels = Personnel.query();
  $scope.types = ['Director', 'Associate', 'Graduate', 'Undergraduate'];
  $scope.saveNew = function() {
    var person = Personnel.save($scope.newPerson);
    $scope.personnels.push($scope.newPerson);
    console.log($scope.newPerson);
    $scope.newPerson = {};
  };
};

var AboutPagesCtrl = function ($scope, AboutPages) {
  $scope.tabs = AboutPages.query();

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };

  $scope.navType = 'pills';
};

app.directive('personnel', function() {
  return {
    restrict: 'A',
    transclude: 'true',
    scope: {
      model: '=ngModel',
      type: '=type',
      types: '=types'
    },
    template: "<div ng-show='rightType'><img ng-src='{{model.picture.picture.thumb.url}}'><div>{{model.name}}</div><div>{{model.title}}</div><div>{{model.phone}}</div><div>{{model.email}}</div></div>",
    link: function(scope, element, attrs, $scope) {
      scope.rightType = false;
      scope.type === scope.types ? scope.rightType = true : scope.rightType = false;
    }
  }
})

