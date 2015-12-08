angular.module('quizCards')
  .controller('cardsController', cardsController);

function cardsController(){
  this.newCard= {};
  this.cards = [
    {id: '1', prompt: "2 X 2", answer: "4", deck: "math"},
    {id: '2', prompt: "3 X 3", answer: "9", deck: "math" },
    {id: '3', prompt: "4 X 4", answer: "16", deck: "math"},
    {id: '4', prompt: "What's the capital of Georgia?", answer: "Atlanta", deck: "Geography"},
    {id: '5', prompt: "What's the capital of Turkey?", answer: "Istanbul", deck: "Geography"},
    {id: '6', prompt: "What languages do people speak in Hong Kong?", answer: "Cantonese & English", deck: "Geography"}
  ];
  this.createNewCard = createNewCard;

  function createNewCard(){
    this.cards.unshift(this.newCard);
    this.newCard= {};
  }
  
  this.deleteCard = deleteCard;

  function deleteCard() {
    console.log(card);
    var cardIndex = this.cards.indexof(this.card);
    console.log(cardIndex);
    this.cards.splice(cardIndex, 1);
  }

  var Card = Parse.Object.extend("Card");
  var card = new Card();
  card.createNewCard().then(function(object){
    alert("yay it worked");
  });
}