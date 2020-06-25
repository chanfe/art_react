const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArtSchema = new Schema({
  _id: {
    //change MongoDB UUid to a UUnumber provided by the Museum api
    type: Number,
    required: true,
    },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String
  },
  creator: {
    type: String
  },
  imageUrl: {
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

module.exports = mongoose.model('Art', ArtSchema);