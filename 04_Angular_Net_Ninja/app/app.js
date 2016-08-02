var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('ninjaController', [ '$scope', function($scope){

	$scope.ninjas = ['Yoshi', 'Crystal', 'Ryu', 'Shaun'];

}]);