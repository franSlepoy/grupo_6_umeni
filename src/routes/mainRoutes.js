const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/maincontrollers");

router.get("/", mainControllers.index);
router.get("/login", mainControllers.login);
router.get("/register", mainControllers.register);
<<<<<<< HEAD
//router.get("/productdetails", mainControllers.productDetails);
=======
router.get("/productdetails", mainControllers.productDetails);
>>>>>>> 6f90a39a738ee748408f829d758f1cbf77f23f90
router.get("/cart", mainControllers.cart);
//router.get("/create", mainControllers.create);
router.get("/edit", mainControllers.edit);
router.get("/test", mainControllers.test);



module.exports = router;