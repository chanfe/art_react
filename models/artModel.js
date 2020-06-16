const mongoose = require('mongoose');
const Schema = mon 

const Schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reactions:[{
      type: Schema.Types.ObjectId,
      ref: "Reaction"
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Art', Schema);