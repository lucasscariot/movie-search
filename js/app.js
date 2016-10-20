angular.module('searchApp', [])
.controller('searchCompany', function($scope, $http) {

  $scope.movies = null;


  $scope.searchCompany=function(){
    $http.get('https://api.themoviedb.org/3/search/company?api_key=26fd39fae8600a9391d2cfb61e1dfca2&query=' + $scope.search).
    then(function(response) {
      console.log('https://api.themoviedb.org/3/search/company?api_key=26fd39fae8600a9391d2cfb61e1dfca2&query=warner' + $scope.search);
      $scope.movies = response.data;
    });
  }
});
