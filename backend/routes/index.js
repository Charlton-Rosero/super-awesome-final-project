const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("This is the root"));


router.post(`/artist`, controllers.createArtist);

router.get(`/artist`, controllers.getArtist);


router.put(`/artist/:id`, controllers.updateArtist);
;
router.delete(`/artistbyname/:name`, controllers.deleteAll);
router.delete(`artist/:id`, controllers.deleteArtistById);


module.exports = router;
