/*
 * CONTROLLERS
 */

angular.module('quizCards.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //CARDS
  .controller('CardsIndexCtrl', ['Card', '$scope', '$location', '$resource', function (Card, $scope, $location, $resource) {
    
    // GET CARDS
   $scope.cards = Card.query();

   // CREATE A CARD    
   $scope.createCard = function() {
     var card = new Card($scope.card);
     card.$save(function(data) {
       $scope.cards.unshift(data);
       $scope.card = {};
     });
   };

   // DELETE A CARD
   $scope.deleteCard = function(card, index) {
     Card.remove({ id: card._id }, function(data) {
       $scope.cards.splice(index, 1);
     });
   };
 }]);

