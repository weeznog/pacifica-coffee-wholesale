angular.module('AdminCtrl',[])

.controller('AdminCtrl', function(itemsService, $scope, sessionService){    
	
	$scope.items; // holds all the items...  

	// triggers for hidding and showing
	$scope.triggers = {    
		showAdd: false,  
		showMenu: false
	}

	// GET ALL ITEMS ===========================================
	itemsService.get().success(function(data){
		$scope.items = data.coffees;

		$scope.loggedIn = sessionService.loggedIn;  
	})
	.error(function(data){
		console.log(' get error');  
	})
	
})








