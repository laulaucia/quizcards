/*
 * ANGULAR APP.JS
 */

angular.module('quizCards', ['ui.router',
                         'quizCards.controllers', 'ngResource'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('cards', {
        url: "/",
        templateUrl: 'templates/cards-index',
        controller: 'CardsIndexCtrl'
      });

    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
