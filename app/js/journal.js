var app = angular.module('journal', ['ui.router', 'firebase']);
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