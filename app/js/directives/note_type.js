angular.module('journal')
.directive('directiveType', function() {
  return {
    restrict: 'E',
    scope: {
      type: "@"
    },
    // replace: true,
    template: '<i class="fa fa-{{icon}}"></i>',
    link: function($scope, ele, attrs) {
      var icons = {
        "task": "square-o",
        "note": "circle",
        "event": "circle-o"
      };
      $scope.icon = icons[$scope.type];
    }
  }
})