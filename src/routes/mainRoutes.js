const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/maincontrollers");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", mainControllers.index);
router.get("/menuMobile", mainControllers.menuMobile);
router.get("/cart", authMiddleware, mainControllers.cart);





module.exports = router;