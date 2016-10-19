angular.module('test', [])
.controller('Hello', function($scope, $http) {
  $http.get('https://api.themoviedb.org/3/discover/movie?api_key=26fd39fae8600a9391d2cfb61e1dfca2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1').
  then(function(response) {
    $scope.movies = response.data;
  });
});
