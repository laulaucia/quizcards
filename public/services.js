angular.module('quizCards.services', [])
	.service('Card', function($window, $resource){
		return $resource($window.location.origin+'/api/cards/:id', {id:'@id'}, {update: {method:'PUT'}});
	});
