var app = angular.module('quizCards');
  app.run(function(){
  Parse.initialize("uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh", "A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1");
});
  app.controller('cardsController', ['$scope',function cardsController($scope){


  var Card = Parse.Object.extend("Card");
  var card = new Card();
  $scope.newCard= {};
  $scope.cards = [];
  //   {id: '1', prompt: "2 X 2", answer: "4", deck: "math"},
  //   {id: '2', prompt: "3 X 3", answer: "9", deck: "math" },
  //   {id: '3', prompt: "4 X 4", answer: "16", deck: "math"},
  //   {id: '4', prompt: "What's the capital of Georgia?", answer: "Atlanta", deck: "Geography"},
  //   {id: '5', prompt: "What's the capital of Turkey?", answer: "Istanbul", deck: "Geography"},
  //   {id: '6', prompt: "What languages do people speak in Hong Kong?", answer: "Cantonese & English", deck: "Geography"}
  // ];
  $scope.createNewCard = createNewCard;


  function createNewCard(){
    card.save($scope.newCard).then(function(object){
      $scope.cards.push($scope.newCard);
      console.log($scope.cards);
      $scope.$apply();
    });
    $scope.newCard= {};
  }
  

  // $scope.deleteCard = deleteCard;

  // function deleteCard() {
  //   console.log(card);
  //   var cardIndex = $scope.cards.indexof($scope.card);
  //   console.log(cardIndex);
  //   $scope.cards.splice(cardIndex, 1);
  // }


  }]);