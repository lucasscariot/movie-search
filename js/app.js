angular.module('test', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://api.themoviedb.org/3/movie/550?api_key=26fd39fae8600a9391d2cfb61e1dfca2').
        then(function(response) {
            $scope.movies = response.data;
        });
});
