
const Artist = require("../models/artist");



async function createArtist(req, res){
  try {
      const artist = await new Artist(req.body)
      await artist.save();
      return res.status(201).json({artist});
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
}
async function getArtist(req, res) {
    try {
      const artist = await Artist.find()
      return res.status(200).json({artist});
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  const updateArtist =  async (req, res) => {
    try {
      const { id } = req.params
     Artist.findByIdAndUpdate(id, req.body, { new: true }, function (err, artist) {
       
        if (err !== null) {
          console.log(err, 'error')
          res.status(404).send(err.message)
        } else {
          console.log(artist)
          res.json(artist)
        }
      })
    } catch (error) {
     return  res.status(500).send(error.message)
    }
  }

  
  async function deleteArtistById(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Artist.findByIdAndDelete({id});

      if (deleted) {
        return res.status(200).send(`Delete Artist`);
      }

      throw new Error(`Artist not found`);

    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  async function deleteAll(req, res) {
    try {
      const { name } = req.params;
      const deleted = await Artist.deleteMany({name});
      if (deleted) {
        return res.status(200).send(`Delete Artist`);
      }
      throw new Error(`Artist not found`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }


  module.exports = {
    getArtist,
    deleteAll,
    updateArtist,
    createArtist,
    deleteArtistById,
  };