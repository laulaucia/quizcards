angular.module('quizCards')
	.factory('Card', function(){
			var factory = {};

			factory.all = function(){
				var CardObject = Parse.Object.extend("Card");
				var query = new Parse.Query(CardObject);
				query.equalTo("createdBy", Parse.User.current());
				return query.find();
			}

			factory.allInDeck = function(deck){
				var CardObject = Parse.Object.extend("Card");
				var query = new Parse.Query(CardObject);
				console.log( "deckis: ", deck);
				query.equalTo("DeckId", deck);
				return query.find();
				
			}

			factory.save = function(card){
				var CardObject = Parse.Object.extend("Card");
				var newCard = new CardObject(); // instantiating card object instance
				newCard.set('prompt', card.prompt);
				newCard.set('answer', card.answer);
				newCard.set('parent', Deck);
				newCard.set("createdBy", Parse.User.current());
				newCard.set('colorfront', card.colorfront);
				newCard.set('colorback', card.colorback);
				console.log("Card is: ", card);
				return newCard.save();
			}

			factory.destroy = function(cardId, success, err) {
            var CardObject = Parse.Object.extend("Card");
            var query = new Parse.Query(CardObject);
            query.get(cardId)
                .then(function(card) {
                    card.destroy(function() {
                        success();
                    }, function() {
                        console.log("error");
                    });
                }, function(CardObject, error) {
                    console.log("object and error", CardObject, error);
                });
        };

		return factory;
	})
	.factory('Deck', function(){
		var factory = {};


			factory.all = function(){
				var DeckObject = Parse.Object.extend("Deck");
				var query = new Parse.Query(DeckObject);
				console.log("getting to All", DeckObject);
				query.equalTo("createdBy", Parse.User.current());
				return query.find();
			}

			factory.save = function(deck){
				var DeckObject = Parse.Object.extend("Deck");
				var newDeck = new DeckObject(); // instantiating deck object instance
				newDeck.set('name', deck.name);
				newDeck.set('description', deck.description);
				newDeck.set("createdBy", Parse.User.current());
				newDeck.set('colorfront', deck.colorfront);
				newDeck.set('colorback', deck.colorback);
				console.log("Deck is: ", deck);
				return newDeck.save();
			}

			factory.findDeck = function(deckId){
				var DeckObject = Parse.Object.extend("Deck");
				var query = new Parse.Query(DeckObject);
				query.get(deckId);
				return DeckObject;
			}

			factory.destroy = function(deckId, success, err) {
            var DeckObject = Parse.Object.extend("Deck");
            var query = new Parse.Query(DeckObject);
            query.get(deckId)
                .then(function(deck) {
                    deck.destroy(function() {
                        success();
                    }, function() {
                        console.log("error");
                    });
                }, function(DeckObject, error) {
                    console.log("object and error", DeckObject, error);
                });
        };

		return factory;
	});
