angular.module('quizCards')
  .directive('DECK', deckView);

function deckView(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "deck-show.html";
  directive.scope = {
      name: '@',
      description: '@',
      cards: '&'
  };
  return directive;
}