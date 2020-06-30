const express = require('express');
const reactionRouter = express.Router();

const { getReaction, showReaction, addReaction, updateReaction, deleteReaction } = require('../controllers/reaction');


reactionRouter.route('/:id')
  .get(showReaction)
  .post(addReaction)
  .delete(deleteReaction)

  
reactionRouter.route('/')
  .get(getReaction)



module.exports = reactionRouter;