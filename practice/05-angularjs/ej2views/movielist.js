var demoApp = angular.module('miAp', ['ngRoute']);

demoApp.config(function($routeProvider) {
    $routeProvider
      .when('/inicio', {
        controller: "controladorMovieList",
        templateUrl: 'inicio.html'
      })
      .when('/movieDetails', {
        controller:"controladorMovieDetails",
        templateUrl: 'movieDetails.html'
      })
      .otherwise({
        redirectTo: '/inicio'
      });
  });

 demoApp.factory("moviesFactory", function(){
  var movies = [
  {title: 'Terminator the movie', year:'1995' , marked: false},
  {title: 'Big hero 6', year:'1995' , marked: false},
  {title: 'Rocky', year:'2010' , marked: false},
  {title: 'Horns', year:'2014' , marked: false},
  {title: 'The Fight Club', year:'2000', marked: false}];

  var factory = {};

  factory.getMovies = function() {
    return movies;
  }
  factory.getTitle = function (movies) {
    return movies.title;
  }
  factory.getYear = function (movies) {
    return movies.year;
  }
  return factory;
 });
 
demoApp.controller("controladorMovieList", function ($scope,moviesFactory)
{
  $scope.movies = [];

  init();

  function init() {
    $scope.movies = moviesFactory.getMovies();
  }

});

demoApp.controller("controladorMovieDetails", function ($scope,moviesFactory)
{

  $scope.movies = [];

  init();

  function init() {
    $scope.movies = moviesFactory.getMovies();
  }
  });


