angular
        .module('super')
        .controller('supersController', function($scope, herosFactory){

  $scope.Heros = herosFactory.getSuperdata();
});
