const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ReactionSchema = new Schema({
  reaction: {
    type: String,
    required: true,
  },
  art:{
      //this is not a Schema.Types.ObjectID because I cast the Art Model into a number instead
      type: Schema.Types.Number, 
      ref: "Art"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reaction', ReactionSchema);