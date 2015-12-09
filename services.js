angular.module('quizCards')
	.factory('Card', function(){
			var factory = {};

			factory.all = function(){
				var Card = Parse.Object.extend("Card");
				var query = new Parse.Query(Card);
				// query.equalTo("createdBy", Parse.Deck.User.current());
				return query.find();
			}

			factory.save = function(card){
				var CardObject = Parse.Object.extend("Card");
				var newCard = new CardObject(); // instantiating card object instance
				newCard.set('prompt', card.prompt);
				newCard.set('answer', card.answer);
				newCard.set('deck', card.deck);
				// newCard.set("createdBy", Parse.User.current());
				console.log("Card is: ", card);
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
		
