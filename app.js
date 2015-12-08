/*
 * ANGULAR APP.JS
 */

var app = angular.module('quizCards', ['ui.router',
                          'ngResource', 'mcwebb.parse-patch']);
app.config(function(ngParseProvider){
  ngParseProvider.initialize("uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh", "A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1");
  var TestObject = ngParse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});
});




  app.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        template: "I'm home, does this render?"
      })
      .state('decks', {
        url: "/decks",
        templateUrl: 'views/templates/decks-index.html',
        controller: 'DecksIndexCtrl'
      })
      // .state('card', {
      //   url: "/decks/cards/:id",
      //   templateUrl: 'templates/cards-show.html',
      //   controller: 'cardsController',
      // })
      .state('cards', {
        url: "/cards",
        templateUrl: 'views/templates/cards-index.html',
        controller: 'cardsController'
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
