const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require("multer");

const { body } = require("express-validator");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/avatars")
    },
    filename: (req, file, cb) => {
        // let fileName=`${Date.now()}_img${path.extname(file.originalname)}`
        // cb(null, filename)
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
        }
})

const validations = [
    body('name').notEmpty().withMessage("Ingrese su nombre por favor"),
    body('email').notEmpty().withMessage("Ingrese su email por favor"),
    body('password').notEmpty().withMessage("Ingrese una clave por favor"),
]

const uploadFile = multer({ storage })

const userController = require("../controllers/userController");

//middlewares
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
//const uploadFile = require('.../middlewares/multerMiddleware');
//const validations = require('.../middlewares/validateRegisterMiddleware');

//formulario login
router.get("/login", guestMiddleware, userController.login);

//Procesar el login
router.post('/login', userController, loginProcess);

//formulario register
router.get("/register", guestMiddleware, userController.register);

//precesar registro
router.post("/register", uploadFile.single("avatar"), validations, userController.processRegister);

//profile
router.get("/profile", authMiddleware, userController.profile);

module.exports = router;