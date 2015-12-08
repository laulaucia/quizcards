angular.module('quizCards')
	.factory('Card', function(){
			var factory = {};

			factory.all = function(){
				var Card = Parse.Object.extend("Card");
				var query = new Parse.Query(Card);
				// query.equalTo("createdBy", Parse.Deck.User.current());
				return query.find();
			}

			factory.save = function(Card){
				var Card = Parse.Object.extend("Card");
				var newCard = new Card(); // instantiating card object instance
				newCard.set('prompt', Card.prompt);
				newCard.set('answer', Card.answer);
				newCard.set('deck', Card.deck);
				// newCard.set("createdBy", Parse.User.current());
				console.log("Card is: ", Card);
				return newCard.save();
			}

			factory.destroy = function(cardId, success, err) {
            var Card = Parse.Object.extend("Card");
            var query = new Parse.Query(Card);
            query.get(cardId)
                .then(function(Card) {
                    Card.destroy(function() {
                        success();
                    }, function() {
                        console.log("error");
                    });
                }, function(Card, error) {
                    console.log("object and error", object, error);
                });
        };

		return factory;
	});
		
