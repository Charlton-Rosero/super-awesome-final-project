
const Band = require("../models/artist");



async function createArtist(req, res){
  try {
      const band = await new Band(req.body)
      await band.save();
      return res.status(201).json({band});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
async function getBand(req, res) {
    try {
      const band = await Band.find()
      return res.status(200).json({band});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateBand =  async (req, res) => {
    try {
      const { id } = req.params
     Band.findByIdAndUpdate(id, req.body, { new: true }, function (err, band) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(band)
          res.json(band)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  
  async function deleteBandById (req, res) {
    try {
      const {_id} = await Band.findByIdAndDelete(req.params._id);
        return res.status(200).send(`deleted Band`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  async function deleteAll(req, res) {
    try {
      const { name } = req.params;
      const deleted = await Band.deleteMany({name});
      if (deleted) {
        return res.status(200).send(`Delete Band`);
      }
      throw new Error(`Band not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  module.exports = {
    getBand,
    deleteAll,
    updateBand,
    createArtist,
    deleteBandById,
  };