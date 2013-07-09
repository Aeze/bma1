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

app.factory('Publication', function($resource) {
  return $resource("/publications/:id", {id: "@id"}, {update: {method: "PUT"}});
});

app.controller("FeedCtrl", ['$scope', 'Feed', function ($scope, Feed) {
    Feed.parseFeed('http://feed.eng.umd.edu/news/feed.xml').then(function (res) {
        $scope.feeds = res.data.responseData.feed.entries;
        console.log($scope.feeds);
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

var PublicationCtrl = function($scope, Publication) {
  $scope.publications = Publication.query(function(){
    console.log($scope.publications);
  });
  $scope.pubs = ['Journal', 'Conference', 'Technical Report', 'Text Book'];
};

var AboutCtrl = function ($scope, AboutPages) {
  $scope.tabs = ['omar', 'marcus'];

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
});

app.directive('publication', function() {
  return {
    restrict: 'A',
    transclude: 'true',
    scope: {
      model: '=ngModel',
      type: '=type',
      types: '=types'
    },
    template: "<div ng-show='rightType'><div>{{model.citation}}<a href='{{model.pdf.pdf.url}}'>PDF</a></div></div>",
    link: function(scope, element, attrs) {
      scope.rightType = false;
      scope.type === scope.types ? scope.rightType = true : scope.rightType = false;
    }
  }
});
