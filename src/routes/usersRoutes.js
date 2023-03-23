const express = require("express");
const router = express.Router();
const path = require("path");

//controller
const userController = require("../controllers/userController");

//middlewares
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const uploadFile = require('../middlewares/multerMiddleware');

//formulario login
router.get("/login", guestMiddleware, userController.login);

//Procesar el login
router.post("/login", userController.loginProcess);

//formulario register
router.get("/register", guestMiddleware, userController.register);

//precesar registro
router.post("/register", uploadFile.single("avatar"), validations, userController.processRegister);

//perfil usuario
router.get("/profile", authMiddleware, userController.profile);

//logout
router.get("/logout", userController.logout);

module.exports = router;