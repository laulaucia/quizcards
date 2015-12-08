angular.module('quizCards')
	.factory('CardService', function($window, $resource){
		return $resource($window.location.origin+'/api/cards/:id', {id:'@id'}, {update: {method:'PUT'}});
	})
	.factory('Deck', function($window, $resource){
		return $resource($window.location.origin+'/api/decks/:id', {id:'@id'}, {update: {method:'PUT'}});
	});
