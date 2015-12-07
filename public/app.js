/*
 * ANGULAR APP.JS
 */

var app = angular.module('quizCards', ['ui.router',
                          'ngResource']);

  app.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
        url: '/',
        template: "I'm home, does this render?"
      })
      .state('decks', {
        url: "/decks",
        templateUrl: 'templates/decks-index.html',
        controller: 'DecksIndexCtrl'
      })
      // .state('card', {
      //   url: "/decks/cards/:id",
      //   templateUrl: 'templates/cards-show.html',
      //   controller: 'cardsController',
      // })
      .state('cards', {
        url: "/cards",
        templateUrl: 'templates/cards-index.html',
        controller: 'cardsController'
      });

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
