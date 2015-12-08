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
				var Card = Parse.Object.extend("Card");
				var newCard = new Card(); // instantiating card object instance
				newCard.set("prompt", newCard.prompt);
				newCard.set("answer", newCard.answer);
				newCard.set("deck", newCard.deck);
				// newCard.set("createdBy", Parse.User.current());
				return newCard.save();
			}

			factory.destroy = function(cardId, success, err) {
            var Card = Parse.Object.extend("Card");
            var query = new Parse.Query(Card);
            query.get(cardId)
                .then(function(card) {
                    card.destroy(function() {
                        success();
                    }, function() {
                        console.log("error");
                    });
                }, function(card, error) {
                    console.log("object and error", object, error);
                });
        };

		return factory;
	});
		
