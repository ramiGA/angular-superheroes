angular
    .module('super')
    .factory('herosFactory', function () {

  var superData = [
{name: "Spider Man", phone: "6789876543", comics: "Marvel"},
{name: "Bat Man", phone: "1234567890", comics: "DC"},
{name: "Iron Man", phone: "7654321985", comics: "Marvel"},
{name: "Super Man", phone: "9876543210", comics: "DC"},
{name: "DeadPool", phone: "9085674321", comics: "Marvel"},
{name: "Wolverine", phone: "9098675435", comics: "Marvel"}
];
function getSuperdata() {
  return superData;
}
return{
  getSuperdata: getSuperdata
}
});
