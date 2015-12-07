var express = require('express');
var deckRouter = express.Router();

var Deck = require('../models/deck.js');
var Card = require('../models/card.js');

deckRouter.route('/')  // translates to '/api/decks/'
  // send all decks
  .get(function(request, response){
      Deck.find().sort('-created_at').exec(function(err, decks) {
      if (err) { return response.status(404).send(err); }
      response.send(decks); 
    });    
  })
  // create new deck
  .post(function(req,res){  
   // var deck = new deck({ content: req.body.content });
   // deck.save(function (err, deck) {
    Deck.create({ content: req.body.content }, function(err, deck){
      if (err) { return res.send(err); }
      console.log(deck);
      res.status(201).send(deck);
    });
  });

deckRouter.route('/:deck_id')   // translates to '/api/decks/:deck_id'
  // send one deck by id
  .get(function(req,res){   
    Deck.findById(req.params.deck_id, function(err, deck) {
      if (err) { return res.status(404).send(err); }
      res.send(deck); 
    });
  })

  // full update of one deck by id
  .put(function(req,res){ 
    Deck.findOneAndUpdate({ _id: req.params.deck_id}, req.query.deck, function (err, deck) {
      if (err) { return res.send(err); }
      res.send(deck);
    });
  })

  // delete one deck by id
  .delete(function(req,res){   
    Deck.findByIdAndRemove(req.params.deck_id, function (err, deck) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });


module.exports = deckRouter;