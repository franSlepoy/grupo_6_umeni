const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/maincontrollers");

router.get("/", mainControllers.index);
router.get("/menuMobile", mainControllers.menuMobile);





module.exports = router;