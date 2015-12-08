Parse.initialize("uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh", "A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1");

var app = angular.module('quizCards', ['ui.router']);

  app.run(['$rootScope',
    function($scope){
      // $scope.scenario = 'Cards show';


    }]
  );
  app.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'views/templates/cards-index.html',
        controller: 'cardsController'
      })
      .state('decks', {
        url: "/decks",
        templateUrl: 'views/templates/decks-index.html',
        controller: 'DecksIndexCtrl'
      });
      $urlRouterProvider.otherwise("/");

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
    }]);

  app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }]);
  app.controller('cardsController', ['$scope', 'Card',
    function cardsController($scope, Card){
      $scope.newCard = {};

      // callbacks for Parse queries
      function getCardsSuccess(results){
        var allCards = [];
        if (results.length === 0){
          console.log("there are no cards yet.");
          $scope.cards = [];
          $scope.$apply();
        }
        else{
          for (var i = 0; i < results.length; i++){
            var card = results[i];
            allCards.unshift(card);
          }
          $scope.cards = allCards;
          $scope.$apply();
          console.log("$scope.cards is:", $scope.cards);
        }
      }
      function getCardsError(error){
        alert("Error:" + error.code + " "+ error.message);
      }

      function createCardSuccess (card){
        console.log("new object created with object id: " + card.id);
        $scope.newCard = {}; // clear unput
        $scope.getCards(); // refresh $scope.cards
      }

      function createCardError (card, error){
        alert("failed to create new object, with error code " + error.message);
      }


      /////// CONTROLLER FUNCTIONS

      $scope.hello = "controller loaded!";

      $scope.getCards = function() {
        Card.all()
        .then(getCardsSuccess, getCardsError);
      };

      $scope.getCards(); /// load cards when controller loads

      $scope.createCard = function(card){
        Card.save(Card).then(createCardSuccess, createCardError);
      };

      $scope.deleteCard = function(cardId){
        console.log("cardId is: ", cardId);
        Card.destroy(cardId, $scope.getCards, function(card, error){
          console.log("error deleting card: ", error , card);
        });
      };
      // Listening for user logging in to populate posts
      // $scope.$on("logged_in", function(event, message) {
      //   $scope.message = message;
      //     console.log("logged in message is:", $scope.message);
      //     $scope.getCards();
      // });

      // Listening for logout from root scope controller, clears posts
      // $scope.$on("logged_out", function(event, message) {
      //     $scope.message = message;
      //     console.log("logged out message is:", $scope.message);
      //     $scope.cards = [];
      // });
}]);
