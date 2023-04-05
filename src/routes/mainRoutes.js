const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/maincontrollers");

router.get("/", mainControllers.index);
router.get("/productdetails", mainControllers.productDetails);
router.get("/cart", mainControllers.cart);
router.get("/edit", mainControllers.edit);
// router.get("/test", mainControllers.test);



module.exports = router;