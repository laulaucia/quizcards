var express = require('express');
var cardRouter = express.Router();

var Card = require('../models/card.js');

cardRouter.route('/')  // translates to '/api/cards/'
  // send all cards
  .get(function(request, response){
      Card.find().sort('-created_at').exec(function(err, cards) {
      if (err) { return response.status(404).send(err); }
      response.send(cards); 
    });    
  })
  // create new card
  .post(function(req,res){  
   // var card = new Card({ content: req.body.content });
   // card.save(function (err, card) {
    card.create({ content: req.body.content }, function(err, card){
      if (err) { return res.send(err); }
      console.log(card);
      res.status(201).send(card);
    });
  });

cardRouter.route('/:card_id')   // translates to '/api/cards/:card_id'
  // send one card by id
  .get(function(req,res){   
    card.findById(req.params.card_id, function(err, card) {
      if (err) { return res.status(404).send(err); }
      res.send(card); 
    });
  })

  // full update of one card by id
  .put(function(req,res){ 
    Card.findOneAndUpdate({ _id: req.params.card_id}, req.query.card, function (err, card) {
      if (err) { return res.send(err); }
      res.send(card);
    });
  })

  // delete one card by id
  .delete(function(req,res){   
    Card.findByIdAndRemove(req.params.card_id, function (err, card) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  });

module.exports = cardRouter;