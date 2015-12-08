angular.module('quizCards')
	.factory('Card', function(){
			var factory = {};

			factory.all = function(){
				var CardObject = Parse.Object.extend("Card");
				var query = new Parse.Query(CardObject);
				// query.equalTo("createdBy", Parse.Deck.User.current());
				return query.find();
			}

			factory.save = function(card){
				var CardObject = Parse.Object.extend("Card");
				var newCard = new CardObject(); // instantiating card object instance
				newCard.set("prompt", CardObject.prompt);
				newCard.set("answer", CardObject.answer);
				// newCard.set("deck", CardObject.deck);
				newCard.set("jhlmlj3EEj", CardObject.Deck)
				// newCard.set("createdBy", Parse.User.current());
				console.log("CardObject is: ", CardObject);
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
		
