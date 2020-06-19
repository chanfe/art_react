const Reaction = require('../models/reactionModel')

// @desc   Get all from Reaction
// @route  GET /api/v1/Reaction
exports.getReaction = async (req, res, next) => {
    try {
      const reaction = await Reaction.find();
      return res.status(200).json({
        success: true,
        data: reaction
      });
    } catch (error) {
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}

// @desc   Get one from Reaction
// @route  GET /api/v1/Reaction/:id
exports.showReaction = async (req, res, next) => {
    try {
        const art = await Reaction.findById(req.params.id);
        if (!art) {
            res.status(404).json({
                success: false,
                error: 'Not Found'
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
        error: 'Server error'
      })
    }
}
  
// @desc   Add to Reaction
// @route  POST /api/v1/Reaction
exports.addReaction = async (req, res, next) => {
    try {
      const reaction = await Reaction.create(req.body);
      return res.status(201).json({
        success: true,
        data: reaction
      });
    } catch (error) {
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}
  
// @desc   Update Reaction
// @route  PUT /api/v1/Reaction
exports.updateReaction = async (req, res, next) => {
    try {
      const { _id } = req.body;
      const newReaction = await Reaction.findOneAndUpdate(
        { _id },
        req.body,
        { new: true }, // Return updated one
      );
      return res.status(200).json(newReaction);
    } catch (error) {
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}

// @desc   Delete Reaction
// @route  DELETE /api/v1/Reaction
exports.deleteReaction = async (req, res, next) => {
    try {
      console.log(req.body);

      const reaction = await Reaction.findById(req.body.id);
      if (!reaction) {
        res.status(404).json({
          success: false,
          error: 'Not Found'
        });
      }

      await reaction.remove();
      return res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {

    }
}