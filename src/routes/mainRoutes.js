const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/maincontrollers");

router.get("/", mainControllers.index);
router.get("/menuMobile", mainControllers.menuMobile);
router.get("/cart", mainControllers.cart);





module.exports = router;