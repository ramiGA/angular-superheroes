angular
        .module('super', ['ui.bootstrap'])
        .controller('supersController', function($scope, herosFactory){

  $scope.Heros = herosFactory.getSuperdata();
});
