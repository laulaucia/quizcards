/*
 * CONTROLLERS
 */

var app = angular.module('quizCards');

  app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }]);
  app.controller("cardsController", ['$scope', 'Card','Deck','$stateParams', '$state',
    function ($scope, Card, Deck, $stateParams, $state){
      $scope.newCard = {};
      $scope.Card= {};
      $scope.scenario = "make cards";
      var dID = $stateParams.id;
      $scope.deckID = dID;
      $scope.currentDeck = {};
   

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
        $scope.getCards(dID); // refresh $scope.cards
      }

      function createCardError (card, error){
        alert("failed to create new object, with error code " + error);
      }


      /////// CONTROLLER FUNCTIONS

      $scope.findCardDeck = function(dID){
      	$scope.currentDeck = {};
      	console.log("this is the deck ID in find deck", dID);
      	$scope.currentDeck = Deck.findDeck(dID);
      	console.log("this is the current deck found on this page", $scope.currentDeck);
      };

      $scope.findCardDeck(dID);
      
      $scope.getCards = function(dID) {
        $scope.newCard = {};
        console.log("this is the deck ID in get cards", dID);
        Card.allInDeck(dID)
        .then(getCardsSuccess, getCardsError);
      };

      $scope.getCards(dID); /// load cards when controller loads

      $scope.createCard = function(card, dID){
      	
   		console.log("this is the current deck create card", $scope.currentDeck);
      	console.log("hey im tryna make a card ", card);
        console.log("this is the current deck in create card", dID);
        Card.save(card, $scope.currentDeck).then(createCardSuccess, createCardError);

      };

      $scope.deleteCard = function(cardId, dID){
        console.log("cardId is: ", cardId);
        Card.destroy(cardId, $scope.getCards(dID), function(card, error){
          console.log("error deleting card: ", error , card);
        });
      };
      // Listening for user logging in to populate posts
      $scope.$on("logged_in", function(event, message) {
        $scope.message = message;
          console.log("logged in message is:", $scope.message);
          $scope.getCards(d);
      });

      // Listening for logout from root scope controller, clears posts
      $scope.$on("logged_out", function(event, message) {
          $scope.message = message;
          console.log("logged out message is:", $scope.message);
          $scope.cards = [];
      });
}]);


//  DECKS THINGS!


app.controller("decksController", ['$scope', 'Deck', 'Card', '$stateParams','$state',
    function ($scope, Deck, Card, $stateParams, $state){
      $scope.newDeck = {};
      $scope.currentDeck = Parse.Deck;
      $scope.scenario = "make decks";
      
      

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

  	$scope.getCards = function(dID) {
        $scope.newCard = {};
        console.log("this is the dID", dID);
        Card.allInDeck(dID)
        .then(getCardsSuccess, getCardsError);
      };

      $scope.getDecks = function() {
        $scope.newDeck = {};
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
        console.log("this is the current state", $state);
        Deck.destroy(deckId, $scope.getDecks, function(deck, error){
          console.log("error deleting deck: ", error , deck);
          $state.go('home');
        });
      };
      // Listening for user logging in to populate decks
      $scope.$on("logged_in", function(event, message) {
        $scope.message = message;
          console.log("logged in message is:", $scope.message);
          $scope.getCards(dID);
      });

      // Listening for logout from root scope controller, clears decks
      $scope.$on("logged_out", function(event, message) {
          $scope.message = message;
          console.log("logged out message is:", $scope.message);
          $scope.decks = [];
      });
}]);

