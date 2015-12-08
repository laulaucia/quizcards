var app = angular.module('quizCards', ['ui.router', 'ngResource']);
  app.constant('myConfig',{
    'api_url': 'https://api.parse.com/1/classes/',
    'parse_application_id': 'uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh',
    'parse_rest_api_key': 'A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1',
  });
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
  app.controller('cardsController', ['$scope','$stateParams', 'CardService',function cardsController($scope, $stateParams, CardService){

    var Card = Parse.Object.extend("CardService");
    var card = new Card();
    $scope.hello = "the cards controller is rendering";
    $scope.newCard= {};
    $scope.cards = [];
    $scope.getcards = function(){
      CardService.query().promise.then(function(result){
        $scope.cards = result.results;
      });
    $scope.findCard = function(){
      console.log($stateParams);
      $scope.card = Card.get($stateParams.id, function(data){
        console.log(data);
      });
    };

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

};
  }]);