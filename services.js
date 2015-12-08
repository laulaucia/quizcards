angular.module('quizCards')
	.factory('Card', function(){
			var factory = {};

			factory.all = function(){
				var CardObject = Parse.Object.extend("CardObject");
				var query = new Parse.Query(CardObject);
				// query.equalTo("createdBy", Parse.Deck.User.current());
				return query.find();
			}

			factory.save = function(Card){
				var CardObject = Parse.Object.extend("CardObject");
				var newCard = new CardObject(); // instantiating card object instance
				newCard.set('prompt', CardObject.prompt);
				newCard.set('answer', CardObject.answer);
				newCard.set('deck', CardObject.deck);
				// newCard.set("createdBy", Parse.User.current());
				console.log("CardObject is: ", CardObject);
				return newCard.save();
			}

			factory.destroy = function(cardId, success, err) {
            var CardObject = Parse.Object.extend("CardObject");
            var query = new Parse.Query(CardObject);
            query.get(cardId)
                .then(function(CardObject) {
                    CardObject.destroy(function() {
                        success();
                    }, function() {
                        console.log("error");
                    });
                }, function(CardObject, error) {
                    console.log("object and error", object, error);
                });
        };

		return factory;
	});
		
