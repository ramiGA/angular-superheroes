angular
    .module('super')
    .factory('herosFactory', function ($http) {
function getSuperdata() {
  return $http.get('data/data.json');
}
return{
  getSuperdata: getSuperdata
}
});
