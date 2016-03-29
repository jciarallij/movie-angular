var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){
	

	var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=batman';
	 
	$scope.imagePath = 'http://image.tmdb.org/t/p/w300/';


	$http({
		method: 'GET',
		url: movieURL
	}).then(function(movieData){
		$scope.movieData = movieData.data.results;
	},function(movieData){
		console.log('There was an error!!');
	});

});

	// var imagePath;
	// var baseURL = 'https://api.themoviedb.org/3/';
	// var apiKey = '?api_key=9a8b1f8e37339a58294a5a6d4208514c';
	// // var nowPlayingUrl;
	// // var movieURL = baseURL + nowPlayingUrl + '?' + apiKey;
	// var movieURL = baseURL + apiKey;
	
	// $scope.movieData = [];

	// $http.get(movieURL).success(function(movieData){
		
	// 	$scope.movieData = movieData.results;


		// for(i=0;i<data.results.length; i++){

		// $scope.movieData.push('http://image.tmdb.org/t/p/w300' + data.results[i].poster_path);
		// }
