var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('ninjaController', [ '$scope', function($scope){

	$scope.ninjas = [{
		name: "Yoshi",
		belt: "green",
		rate: 50
	},
	{
		name: "Krystal",
		belt: "blue",
		rate: 100
	},
	{
		name: "Yoshi",
		belt: "orange",
		rate: 10
	},
	{
		name: "Shaun",
		belt: "black",
		rate: 1000
	}

	];

}]);