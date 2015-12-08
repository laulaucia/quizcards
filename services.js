angular.module('quizCards')
	.factory('CardService', function($resource, myConfig){
		return $resource(myConfig.api_url+'Cards',{}, {
		query:{
			method: 'GET',
			headers: {
				'X-Parse-Application-Id': myConfig.parse_application_id,
				'X-Parse-REST-API-KEY': myConfig.parse_rest_api_key
			}

		},
		update: {
			method:'PUT',
			headers: {
				'X-Parse-Application-Id': myConfig.parse_application_id,
				'X-Parse-REST-API-KEY': myConfig.parse_rest_api_key
			}
		},
		create:{
			method: 'POST',
			headers: {
				'X-Parse-Application-Id': myConfig.parse_application_id,
				'X-Parse-REST-API-KEY': myConfig.parse_rest_api_key
			}
		}

	});
// 	.factory('Deck', function($window, $resource){
// 		return $resource($window.location.origin+'/api/decks/:id', {id:'@id'}, {update: {method:'PUT'}});
	});
