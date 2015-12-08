// /*
//  * ANGULAR APP.JS
//  */

// var app = angular.module('quizCards', ['ui.router',
//                           'ngResource']);
// app.run(function(){
//   Parse.initialize("uSFbSM6EMj5Zb2dCyuwQaPxzKuKkAy4sifhq9hWh", "A92NpYrHsWzXfP9OPcSzEI70aQgk6dL4KzfwvUb1");
//   var TestObject = Parse.Object.extend("TestObject");
//   var testObject = new TestObject();
//   testObject.save({foo: "bar"}).then(function(object) {
//   alert("yay! it worked");
// });
// });


//   app.config(['$stateProvider', '$locationProvider','$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('home',{
//         url: '/',
//         templateUrl: 'views/templates/cards-index.html',
//         controller: 'cardsController'
//       })
//       .state('decks', {
//         url: "/decks",
//         templateUrl: 'views/templates/decks-index.html',
//         controller: 'DecksIndexCtrl'
//       });
//       // .state('card', {
//       //   url: "/decks/cards/:id",
//       //   templateUrl: 'templates/cards-show.html',
//       //   controller: 'cardsController',
//       // })
//       // .state('cards', {
//       //   url: "/cards",
//       //   templateUrl: 'views/templates/cards-index.html',
//       //   controller: 'cardsController'
//       // });

//     $urlRouterProvider.otherwise("/");

//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });
//   }]);
