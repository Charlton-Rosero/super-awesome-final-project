const { Router } = require("express");
const controllers = require(`../controllers`);
const router = Router();

router.get("/", (req, res) => res.send("This is the root"));


router.post(`/artist`, controllers.createArtist);

router.get(`/artist`, controllers.getBand);


router.put(`/artist/:id`, controllers.updateBand);
;
router.delete(`/artist/:name`, controllers.deleteAll);
router.delete(`/artist/:id`, controllers.deleteBandById);


module.exports = router;
