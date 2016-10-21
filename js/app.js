angular.module('searchApp', [])
.controller('searchCompany', function($scope, $http) {

  $scope.movies = null;

  $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=26fd39fae8600a9391d2cfb61e1dfca2&language=en-US').
  then(function(response) {
    $scope.movies = response.data['results'];
  });

  $scope.searchCompany=function(){
    $http.get('https://api.themoviedb.org/3/search/company?api_key=26fd39fae8600a9391d2cfb61e1dfca2&query=' + $scope.search).
    then(function(response) {
      $scope.companys = response.data['results'];
    });
  }
});
