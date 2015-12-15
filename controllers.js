/*
 * CONTROLLERS
 */

var app = angular.module('quizCards');

  app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }]);
  app.controller("cardsController", ['$scope', 'Card','Deck','$stateParams',
    function ($scope, Card, Deck, $stateParams){
      $scope.newCard = {};
      $scope.scenario = "make cards";
      var d = $stateParams.id;
      $scope.deckID = d;

      // callbacks for Parse queries
      function getCardsSuccess(results){
        var allCards = [];
        $scope.Card = {};
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
          
        }
      }
      function getCardsError(error){
        alert("Error:" + error.code + " "+ error.message);
      }

      function createCardSuccess (card){
        console.log("new object created with object id: " + card.id);
        $scope.newCard = {}; // clear unput
        $scope.getCards(d); // refresh $scope.cards
      }

      function createCardError (card, error){
        alert("failed to create new object, with error code " + error.message);
      }


      /////// CONTROLLER FUNCTIONS

      
      $scope.getCards = function(d) {
        $scope.newCard = {};
        console.log("this is the d", d);
        Card.allInDeck(d)
        .then(getCardsSuccess, getCardsError);
      };

      $scope.getCards(d); /// load cards when controller loads

      $scope.createCard = function(card){
        console.log("hey im tryna make a card ", card);
        Card.save(card).then(createCardSuccess, createCardError);

      };

      $scope.deleteCard = function(cardId){
        console.log("cardId is: ", cardId);
        Card.destroy(cardId, $scope.getCards, function(card, error){
          console.log("error deleting card: ", error , card);
        });
      };
      // Listening for user logging in to populate posts
      $scope.$on("logged_in", function(event, message) {
        $scope.message = message;
          console.log("logged in message is:", $scope.message);
          $scope.getCards();
      });

      // Listening for logout from root scope controller, clears posts
      $scope.$on("logged_out", function(event, message) {
          $scope.message = message;
          console.log("logged out message is:", $scope.message);
          $scope.cards = [];
      });
}]);


//  DECKS THINGS!


app.controller("decksController", ['$scope', 'Deck', 'Card', '$stateParams',
    function ($scope, Deck, Card, $stateParams){
      $scope.newDeck = {};
      $scope.currentDeck = Parse.Deck;
      $scope.scenario = "make decks";
      // $scope.cardsInDeck = [];

      // callbacks for Parse queries
      function getDecksSuccess(results){
        var allDecks = [];
        $scope.Deck = {};
        if (results.length === 0){
          console.log("there are no decks yet.");
          $scope.decks = [];
          $scope.$apply();
        }
        else{
          for (var i = 0; i < results.length; i++){
            var deck = results[i];
            allDecks.unshift(deck);
          }
          $scope.decks = allDecks;
          $scope.$apply();
          
        }
      }
      function getDecksError(error){
        alert("Error:" + error.code + " "+ error.message);
      }

      function createDeckSuccess (deck){
        console.log("new object created with object id: " + deck.id);
        $scope.newDeck = {}; // clear unput
        $scope.getDecks(); // refresh $scope.Decks
      }

      function createDeckError (deck, error){
        alert("failed to create new object, with error code " + error.message);
      }
		function getCardsError(error){
        alert("Error:" + error.code + " "+ error.message);
      }

      	function getCardsSuccess(results){
        var allCards = [];
        $scope.Card = {};
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
          
        }
		}

      /////// DECK CONTROLLER FUNCTIONS

  	$scope.getCards = function(d) {
        $scope.newCard = {};
        console.log("this is the d", d);
        Card.allInDeck(d)
        .then(getCardsSuccess, getCardsError);
      };

      // // Assume Parse.Object myPost was previously created.
// var query = new Parse.Query(Comment);
// query.equalTo("post", myPost);
// query.find({
//   success: function(comments) {
//     // comments now contains the comments for myPost
//   }
// });

      $scope.getDecks = function() {
        $scope.newDeck = {};
        console.log($scope.newDeck);
        Deck.all()
        .then(getDecksSuccess, getDecksError);
      };

      $scope.getDecks(); /// load Decks when controller loads

      $scope.createDeck = function(deck){
        console.log("hey im tryna make a deck ", deck);
        Deck.save(deck).then(createDeckSuccess, createDeckError);

      };

      $scope.deleteDeck = function(deckId){
        console.log("deckId is: ", deckId);
        Deck.destroy(deckId, $scope.getDecks, function(deck, error){
          console.log("error deleting deck: ", error , deck);
        });
      };
      // Listening for user logging in to populate decks
      $scope.$on("logged_in", function(event, message) {
        $scope.message = message;
          console.log("logged in message is:", $scope.message);
          $scope.getCards();
      });

      // Listening for logout from root scope controller, clears decks
      $scope.$on("logged_out", function(event, message) {
          $scope.message = message;
          console.log("logged out message is:", $scope.message);
          $scope.decks = [];
      });
}]);

