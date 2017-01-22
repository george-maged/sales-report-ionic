angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.error = "";

}])
   
.controller('signupCtrl', ['$scope', '$stateParams','$ionicPopup','$state','$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup,$state,$timeout) {
	$scope.data = {
		error : "",
		email : "",
		fullName : "",
		password : "",
		password2 : "",
		manager : false
	}
	var showAlert = function(message) {
    	var alertPopup = $ionicPopup.alert({
       		title: 'Done!',
       		template: 'Please, wait until a manager approves your request so you can log in.'
     	});
   		alertPopup.then(function(res) {
   			$state.go('login');
    	});
   	};
   	function clearError() {
   		$scope.data.error = "";
   	}
   	function displayError(message) {
   		$scope.data.error = message;
   		$timeout(clearError,3000);
   	}
   	$scope.signUpFunc = function () {
   		if(!$scope.data.email.includes("@")){
   			displayError("Invalid email");
   			return;
   		}
   		if(!($scope.data.password === $scope.data.password2)){
   			displayError("Passwords do not match");
   			return;
   		}
   		if($scope.data.password.length < 8){
   			displayError("Password should be at least 8 charachters long");
   			return;
   		}
   		if($scope.data.fullName === ""){
   			displayError("Please, enter your full name");
   			return;
   		}
	   	showAlert();
   	}
}])
 