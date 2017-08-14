angular
        .module('super', ['ui.bootstrap'])
        .controller('supersController', function($scope, herosFactory){

            $scope.Heros;
             herosFactory.getSuperdata().success(function (data) {
               $scope.Heros = data;

             }).error(function (error) {
               console.log(error);

             });
});
