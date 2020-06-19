const Art = require('../models/artModel')

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
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}

// //testing
// exports.getArt = (req, res, next) => {

//       Art.find((err, art) => {
//           if (err) {
//             console.log(err)
//             res.sendStatus(500).json({
//                 success: false,
//                 error: 'Server error'
//               })
//           }
//           else {
//             return res.status(200).json({
//                 success: true,
//                 data: art
//               });
//           }
//       });

// }
  
// @desc   Add to Art
// @route  POST /api/v1/Art
exports.addArt = async (req, res, next) => {
    try {
      const art = await Art.create(req.body);
      return res.status(201).json({
        success: true,
        data: art
      });
    } catch (error) {
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}
//testing
// exports.addArt = (req, res, next) => {
//     const art = new Art(req.body)

//     art.save()
//         .then(art => {
//             res.status(201).json({
//                 success: true,
//                 data: art
//                 })
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({
//                 success: false,
//                 error: 'failed to add new art item'
//             })
//         })
    
// }
  
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
      res.sendStatus(500).json({
        success: false,
        error: 'Server error'
      })
    }
}

// @desc   Delete Art
// @route  DELETE /api/v1/Art
exports.deleteArt = async (req, res, next) => {
    try {
      console.log(req.body);

      const art = await Art.findById(req.body.id);
      if (!art) {
        res.status(404).json({
          success: false,
          error: 'Not Found'
        });
      }

      art.remove();
      return res.status(200).json({
        success: true,
        data: {}
      });
    } catch (error) {
        res.sendStatus(500).json({
            success: false,
            error: 'Server error'
          })
    }
}