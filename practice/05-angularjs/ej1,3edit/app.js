function movieList($scope) {
  $scope.movies = [{title: 'Terminator the movie', year:'1995' , marked: false},
  {title: 'Big hero 6', year:'1995' , marked: false},
  {title: 'Rocky', year:'2010' , marked: false},
  {title: 'Horns', year:'2014' , marked: false},
  {title: 'The Fight Club', year:'2000', marked: false}];

  $scope.addMovie = function() {
    $scope.movies.push({title: $scope.textNewMovieTitle,year: $scope.textNewMovieYear, marked: false});
    $scope.textNewMovieTitle = '';
    $scope.textNewMovieYear = '';
  };

  $scope.deleteMovie = function() {
    var oldMovies = $scope.movies;
    $scope.movies = [];
    angular.forEach(oldMovies, function(movie) {
      if (!movie.marked) $scope.movies.push(movie);
    });
  };


}


function ClickToEditCtrl($scope) {
  $scope.title = $scope.movie.title;
  $scope.year = $scope.movie.year;
  $scope.editorEnabled = false;

  $scope.enableEditor = function() {
    $scope.editorEnabled = true;
    $scope.editableTitle = $scope.movie.title;
    $scope.editableYear = $scope.movie.year;
  };

  $scope.disableEditor = function() {
    $scope.editorEnabled = false;
  };

  $scope.save = function() {
    $scope.movie.title = $scope.editableTitle;
    $scope.movie.year = $scope.editableYear;
    $scope.disableEditor();
  };
}