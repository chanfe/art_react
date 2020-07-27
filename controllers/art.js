const Art = require("../models/artModel");
const Reaction = require("../models/reactionModel");
const axios = require("axios");


// get the data of a single art
const supportMethod = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    return data;

  } catch (error) {
    console.log(error);
  }
};

//support method find total number of viewable image in musium api
const getData = async (url) => {
  try {
      //useing axios here

    const response = await axios.get(url);
    const data = response.data;

    const random = Math.floor(Math.random() * Math.floor(data.total));
    const url2 = "https://collectionapi.metmuseum.org/public/collection/v1/objects/" + data.objectIDs[random];
    return await supportMethod(url2);

  } catch (error) {
    console.log(error);
  }
};




// @desc   Get one random art from the museum api
// @route  GET /api/v1/Art
exports.randomArt = async (req, res, next) => {
    try {
        const url = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=art";
        const artData = await getData(url);
        const title, portfolio, artistDisplayName, objectID, primaryImage = artData
        let art = await Art.findById({_id: objectID});
        if (!art) {
            let body = {
                "_id": objectID,
                "title": title,
                "description": portfolio,
                "creator": artistDisplayName,
                "imageUrl": primaryImage
            }
            art = await Art.create(body);
        };
        
      return res.status(200).json({
        success: true,
        data: art
      });
    } catch (error) {
        res.status(500).json({
          success: false,
          error: "Server error"
        });
    }
}

// @desc   Get all from Art
// @route  GET /api/v1/Art
exports.getArt = async (req, res, next) => {
    try {
      const art = await Art.find();
      return res.status(200).json({
        success: true,
        data: art
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Server error"
      })
    }
}

// @desc   Get one from Art
// @route  GET /api/v1/Art/:id
exports.showArt = async (req, res, next) => {
    try {
        const art = await Art.findById(req.params.id);
        if (!art) {
            res.status(404).json({
                success: false,
                error: "Not Found"
            });
        }
        return res.status(200).json({
            success: true,
            data: art
        });
        
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        error: "Server error"
      })
    }
}

// @desc   Get one from Art
// @route  GET /api/v1/Art/:id/reactions
exports.showArtReactions = async (req, res, next) => {
  try {
      const art = await Art.findById(req.params.id);
      if (!art) {
          res.status(404).json({
              success: false,
              error: "Not Found"
          });
      }

      const reactions = await Promise.all(art.reactions.map(async (reaction) => {
        let temp = await Reaction.findById(reaction);
        return temp.reaction;
        })
      );
      
      return res.status(200).json({
          success: true,
          data: reactions
      });
      
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      error: "Server error"
    })
  }
}
  
// @desc   Add to Art
// @route  POST /api/v1/Art
exports.addArt = async (req, res, next) => {
    try {
      const art = await Art.create(req.body);
      return res.status(200).json({
        success: true,
        data: art
      });
    } catch (error) {
        console.log(error)
      res.status(500).json({
        success: false,
        error: "Server error"
      })
    }
}
  
// @desc   Update Art
// @route  PUT /api/v1/Art
exports.updateArt = async (req, res, next) => {
    try {
      const { _id } = req.body;
      const newArt = await Art.findOneAndUpdate(
        { _id },
        req.body,
        { new: true }, // Return updated one
      );
      return res.status(200).json(newArt);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Server error"
      })
    }
}

// @desc   Delete Art
// @route  DELETE /api/v1/Art
exports.deleteArt = async (req, res, next) => {
    try {
      const art = await Art.findById(req.body.id);
      if (!art) {
        res.status(404).json({
          success: false,
          error: "Not Found"
        });
      }

      art.remove();
      return res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server error"
          })
    }
}