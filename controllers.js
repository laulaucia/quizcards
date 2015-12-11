/*
 * CONTROLLERS
 */

var app = angular.module('quizCards');

  app.controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }]);
  app.controller("cardsController", ['$scope', 'Card',
    function ($scope, Card){
      $scope.newCard = {};

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
        $scope.getCards(); // refresh $scope.cards
      }

      function createCardError (card, error){
        alert("failed to create new object, with error code " + error.message);
      }


      /////// CONTROLLER FUNCTIONS


      $scope.getCards = function() {
        $scope.newCard = {};
        Card.all()
        .then(getCardsSuccess, getCardsError);
      };

      $scope.getCards(); /// load cards when controller loads

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


// angular.module('quizCards')
//   .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
//     // INITIALIZATION AND NAVBAR LOGIC
//   }]);

 //  //CARDS
 //  .controller('CardsIndexCtrl', ['Card', '$scope', '$location', '$resource', function (Card, $scope, $location, $resource) {
    
 //    // GET CARDS
 //   $scope.cards = [Card.query()];

 //   // CREATE A CARD    
 //   $scope.createCard = function() {
 //     var card = new Card($scope.card);
 //     card.$save(function(data) {
 //       $scope.cards.unshift(data);
 //       $scope.card = {};
 //     });
 //   };

 //   // DELETE A CARD
 //   $scope.deleteCard = function(card, index) {
 //     Card.remove({ id: card._id }, function(data) {
 //       $scope.cards.splice(index, 1);
 //     });
 //   };
  
 // }])

 //  //DECKS
 //  .controller('DecksIndexCtrl', ['Deck', '$scope', '$location', '$resource', function (Deck, $scope, $location, $resource) {
    
 //    // GET DECKS
 //   $scope.decks = Deck.query();

 //   // CREATE A DECK    
 //   $scope.createDeck = function() {
 //     var deck = new Deck($scope.deck);
 //     deck.$save(function(data) {
 //       $scope.decks.unshift(data);
 //       $scope.deck = {};
 //     });
 //   };

 //   // DELETE A DECK
 //   $scope.deleteDeck = function(deck, index) {
 //     Deck.remove({ id: deck._id }, function(data) {
 //       $scope.decks.splice(index, 1);
 //     });
 //   };
  
 // }]);