const express = require('express');
const reactionRouter = express.Router();

const { getReaction, addReaction, updateReaction, deleteReaction } = require('../controllers/reaction');


reactionRouter.route('/:id')
  .post(addReaction)
  .delete(deleteReaction)

  
reactionRouter.route('/')
  .get(getReaction)



module.exports = reactionRouter;