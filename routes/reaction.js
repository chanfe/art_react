const express = require('express');
const reactionRouter = express.Router();

const { getReaction, addReaction, updateReaction, deleteReaction } = require('../controllers/reaction');

reactionRouter.route('/')
  .get(getReaction)
  .post(addReaction)
  .delete(deleteReaction)
  .put(updateReaction)

module.exports = reactionRouter;