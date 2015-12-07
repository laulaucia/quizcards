/*
 * CONTROLLERS
 */

angular.module('quizCards')
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }]);

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