angular.module('quizCards')
  .controller('cardsController', ['$scope', '$state','ngParse', function( $scope, $state, ngParse){

  $scope.newCard= {};
  $scope.cards = [
    {id: '1', prompt: "2 X 2", answer: "4", deck: "math"},
    {id: '2', prompt: "3 X 3", answer: "9", deck: "math" },
    {id: '3', prompt: "4 X 4", answer: "16", deck: "math"},
    {id: '4', prompt: "What's the capital of Georgia?", answer: "Atlanta", deck: "Geography"},
    {id: '5', prompt: "What's the capital of Turkey?", answer: "Istanbul", deck: "Geography"},
    {id: '6', prompt: "What languages do people speak in Hong Kong?", answer: "Cantonese & English", deck: "Geography"}
  ];
  $scope.createNewCard = function createNewCard(){
    $scope.cards.unshift($scope.newCard);
    $scope.newCard= {};
  };
  
  $scope.deleteCard = deleteCard();{
    console.log(card);
    var cardIndex = $scope.cards.indexof($scope.card);
    console.log(cardIndex);
    $scope.cards.splice(cardIndex, 1);
  }

  var Card = ngParse.Object.extend('Card',{
    fields:['prompt', 'answer', 'deck']
  });
  var card = new Card();
  card.save({fields:['prompt', 'answer', 'deck']}).then(function(object){
    alert("yay it worked");
  });
}]);