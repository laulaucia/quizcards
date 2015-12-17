Parse.initialize("uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh", "A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1");

var app = angular.module('quizCards', ['ui.router']);

  app.run(['$rootScope',
    function($scope){
      $scope.scenario = 'Hello!';
      $scope.currentUser = Parse.User.current();

      $scope.signUp = function(form){
        var user = new Parse.User();
        user.set("email", form.email);
        user.set("username", form.username);
        user.set("password", form.password);

        user.signUp(null, {
          success: function(user){
            $scope.currentUser = user;
            $scope.$apply();
        },
        error: function(user,error){
          alert("Couldn't sign you up!: " + error.code + " " + error.message);
        }
      });
    };

    $scope.logIn = function(form){
      Parse.User.logIn(form.username, form.password, {
        success: function(user){
          $scope.currentUser = user;
          $scope.message = "Welcome "+ $scope.currentUser.attributes.username;
          $scope.$broadcast('logged_in', $scope.message);
          $scope.$apply();
        },
        error: function(user, error){
          alert("Shucks! we couldnt log you in! "+ error.code + " " + error.message);
        }
      });
    };
    $scope.logOut = function(form){
      Parse.User.logOut();
      $scope.currentUser = null;
      $scope.message = "No User logged in";
      $scope.broadcast('logged_out', $scope.message);
    };

 }]);

  app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
      // INITIALIZATION AND NAVBAR LOGIC
    }]);

 //* A generic confirmation for risky actions.
 
  app.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    };
}]);

  app.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/templates/decks-index.html',
        controller: 'decksController'
        
      })
      .state('cards', {
        url: "/decks/:id",
        templateUrl: 'views/templates/cards-index.html',
        controller: 'cardsController'

        
      });

      $urlRouterProvider.otherwise("/");

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
    }]);