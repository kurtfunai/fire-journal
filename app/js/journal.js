var app = angular.module('journal', ['ui.router', 'kf-moment', 'firebase']);

angular.module('kf-moment', []).factory('$moment', ['$window',
  function ($window) {
    if (typeof $window.moment === 'undefined') {
      throw 'moment.js not found.';
    }
    return $window.moment;
  }
]);

var viewsPath = 'app/views';

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('welcome', {
      url: "/",
      templateUrl: viewsPath+"/index/welcome.html"
    })
    .state('sign_up_path', {
      url: "/users/sign_up",
      templateUrl: viewsPath+"/auth/sign_up.html",
      controller: "AuthCtrl"
    })
    .state('people', {
      url: "/people",
      templateUrl: viewsPath+"/people/index.html",
      controller: "PeopleCtrl"
    })
    .state('notes', {
      url: "/notes",
      templateUrl: viewsPath+"/notes/index.html",
      controller: "NotesCtrl"
    })
    .state('notes.show', {
      url: "/:note",
      templateUrl: viewsPath+"/notes/show.html",
      controller: function($scope, $stateParams) {
        $scope.note = $stateParams.note;
      }
    })
});