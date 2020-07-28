const express = require("express");
const artRouter = express.Router();

const { getArt, addArt, updateArt, deleteArt, showArt, randomArt, showArtReactions} = require("../controllers/art");

artRouter.route("/random")
  .get(randomArt);

artRouter.route("/:id/reactions")
  .get(showArtReactions);

artRouter.route("/:id")
  .get(showArt);

artRouter.route("/")
  .get(getArt)
  .post(addArt)
  .delete(deleteArt)
  .put(updateArt);



module.exports = artRouter;