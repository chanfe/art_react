const express = require('express');
const router = express.Router();

const { getArt, addArt, updateArt, deleteArt } = require('../controllers/reaction');

router.route('/')
  .get(getArt)
  .post(addArt)
  .delete(deleteArt)
  .put(updateArt)

module.exports = router;