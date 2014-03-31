angular.module('journal')
.controller('NotesCtrl', function($scope, $firebase) {
  var notesRef = new Firebase("https://fire-journal.firebaseio.com/notes");
  $scope.notes = $firebase(notesRef);
  $scope.note = {
    type: 'task',
    contents: "",
    created_at: "",
    updated_at: "",
    invalid: false
  };

  $scope.createNote = function(note) {
    $scope.notes.$add($scope.note);
    $scope.note = {type: 'task'};
  }

  $scope.setNoteType = function(type) {
    $scope.note.type = type;
  }
})
