angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('admin', {
    url: '/admin',
    abstract: true,
    templateUrl: 'templates/admin.html'
  })

  .state('admin.requests', {
    url: '/requests',
    views: {
      'admin-requests': {
        templateUrl: 'templates/admin-requests.html',
        controller: 'requestsCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/login')

  

});