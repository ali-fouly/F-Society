app.controller('FlightsController', ['$scope', '$resource', function($scope, $resource){
	var Flight = $resource('/api/flights');
	
	Flight.query(function(results) {
		$scope.flights = results;
	});

	$scope.createFlight = function (){
		var flight = new Flight();
		flight.flight_number = $scope.flightNumber;
		flight.$save(function(result){
		$scope.flights.push(result);
		$scope.flightNumber = " ";
		});
	}
}]);