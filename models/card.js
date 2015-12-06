/*
 * CARD MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
    created_at: { 
      type: Date, 
      default: Date.now() 
    },
    updated_at: { type: Date },
    answer: { 
      type: String, 
      required: true, 
      trim: true 
    },
    prompt:{ 
      type: String, 
      required: true, 
      trim: true 
    }
});

// MIDDLEWARE
CardSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export card model
var Card = mongoose.model('Card', CardSchema);

module.exports = Card;
