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

.controller('PeopleCtrl', function($scope, $firebase, $moment, $timeout) {
  var peopleRef = new Firebase("https://fire-journal.firebaseio.com/people");
  $scope.people = $firebase(peopleRef, function(data) {
    console.log(data);
  });
  $scope.person = {
    firstName: '',
    lastName: '',
    completedDays: {}
  };

  $scope.today = $moment().format('LL');

  $scope.recentDays = [];
  var numberOfRecentDays = 7;
  for (var i = numberOfRecentDays -1 ; i >= 0; i--) {
    $scope.recentDays.push(moment().subtract('days', i).format("YYYY-MM-DD"));
  };

  $scope.addPerson = function(person) {
    $scope.people.$add(person);
    $scope.person = {};
  };

  $scope.completeDay = function(person, day) {
    if (person.completedDays === undefined) {
      console.log('hello')
      person['completedDays'] = {};
    }
    person['completedDays'][day] = true;
    $scope.people.$save();
  };

  $scope.hasCompletedDay = function(person, day) {
    return person['completedDays'] ? !!person['completedDays'][day] : false;
  };
});
