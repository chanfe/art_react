const express = require('express');
const artRouter = express.Router();

const { getArt, addArt, updateArt, deleteArt } = require('../controllers/art');

artRouter.route('/')
  .get(getArt)
  .post(addArt)
  .delete(deleteArt)
  .put(updateArt)

artRouter.route('/:id')
    .delete(deleteArt)

module.exports = artRouter;