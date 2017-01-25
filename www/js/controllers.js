angular.module('app.controllers', [])
  
.controller('loginCtrl', ['$scope', '$stateParams','$http','errorMaker','$timeout','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,errorMaker,$timeout,$state) {
	$scope.data = {
		error 		: "",
		email 		: "",
		password 	: "",
		loading		: false
	};
	$scope.logInFunc = function(email,password){
		if($scope.data.email===undefined||$scope.data.email===""){
   			errorMaker.displayError($scope,$timeout,"Email Missing")
   			return;
   		}
   		if($scope.data.password == ""){
   			errorMaker.displayError($scope,$timeout,"Password Missing")
   			return;
   		}
		$scope.data.loading = true;
		$http.post('https://pet-backend-server.herokuapp.com/api/login',{"email":email,"password":password}).then(function(result) {
			if(result.data.error){
				errorMaker.displayError($scope,$timeout,result.data.message)
			}else{
        $state.go('admin.requests')
      }
		});
		$scope.data.loading = false;
	}
}])
.controller('requestsCtrl',['$scope',
	function($scope) {
		$scope.data = {
			title : "Requests"
		}
	}
])
.controller('signupCtrl', ['$scope', '$stateParams','$ionicPopup','$state','$timeout','errorMaker', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup,$state,$timeout,errorMaker) {
	$scope.data = {
		error 		: "",
		email 		: "",
		fullName 	: "",
		password 	: "",
		password2 	: "",
		manager 	: false
	}
	function showAlert(message) {
    	var alertPopup = $ionicPopup.alert({
       		title: 'Done!',
       		template: 'Please, wait until a manager approves your request so you can log in.'
     	});
   		alertPopup.then(function(res) {
   			$state.go('login');
    	});
   	};
   	$scope.signUpFunc = function () {
   		if($scope.data.fullName === ""){
   			errorMaker.displayError($scope,$timeout,"Please enter your name")
   			return;
   		}
   		if($scope.data.email===undefined||$scope.data.email===""){
   			errorMaker.displayError($scope,$timeout,"Invalid email")
   			return;
   		}
   		if(!($scope.data.password === $scope.data.password2)){
   			errorMaker.displayError($scope,$timeout,"Passwords do not match")
   			return;
   		}
   		if($scope.data.password.length < 8){
   			errorMaker.displayError($scope,$timeout,"Password must be at least 8 charachters long")
   			return;
   		}
	   	showAlert();
   	}
}])
 