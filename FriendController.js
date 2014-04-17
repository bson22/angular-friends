(function() {
	angular.module('angular-friends').controller('FriendController', function ($scope, $http) {
		$scope.list
		$scope.test = "hello world";
		$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json").success(function(data){
			$scope.friends = data.results;
		});
		//$scope.searchTerm = $filter('orderBy')(name,'friends')
		
		// jQuery.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(data) {
		// 	$scope.$apply(function() {
		// 		$scope.friends = data.results;
		// 	});
		// });
	$scope.sortArray = [ {string:"Name", val:"name" }, 
	{string:"Friends", val:"friend_count"}, 
	{string:"City", val:"current_location.city"}, 
	{string:"State", val:"current_location.state"},
	{string:"Country", val:"current_location.country"}
	];

	});
})();


