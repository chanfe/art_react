const express = require('express');
const artRouter = express.Router();

const { getArt, addArt, updateArt, deleteArt, showArt } = require('../controllers/art');

artRouter.route('/')
  .get(getArt)
  .post(addArt)
  .delete(deleteArt)
  .put(updateArt)
  
artRouter.route('/:id')
  .get(showArt)

module.exports = artRouter;