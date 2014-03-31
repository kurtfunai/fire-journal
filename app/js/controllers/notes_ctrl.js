angular.module('journal')
.controller('NotesCtrl', function($scope, $firebase) {
  var notesRef = new Firebase("https://fire-journal.firebaseio.com/notes");
  $scope.notes = $firebase(notesRef);
  $scope.note = {};

  $scope.createNote = function(note) {
    $scope.notes.$add($scope.note);
    $scope.note = {};
  }
})
