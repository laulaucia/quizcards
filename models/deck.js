/*
 * DECK MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var cards = require('card.js');

var DeckSchema = new Schema({
    created_at: { 
      type: Date, 
      default: Date.now() 
    },
    updated_at: { type: Date },
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]

    
});

// MIDDLEWARE
DeckSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export deck model
var Deck = mongoose.model('Deck', DeckSchema);

module.exports = Deck;