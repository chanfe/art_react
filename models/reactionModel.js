const mongoose = require('mongoose');
const Schema = mongoose.Schema


const ReactionSchema = new Schema({
  reaction: {
    type: String,
    required: true,
  },
  art:{
      type: Schema.Types.ObjectId,
      ref: "Art"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reaction', ReactionSchema);