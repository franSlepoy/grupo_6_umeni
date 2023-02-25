const express = require("express");
const router = express.Router();
const path = require("path")

const multer = require("multer")

const { body } = require("express-validator") 

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

const usersControllers = require("../controllers/usersControllers");

//middlewares
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//formulario login
router.get("/login", guestMiddleware, usersControllers.login);

//procesar login


//formulario register
router.get("/register", guestMiddleware, usersControllers.register);

//precesar registro
router.post("/register", uploadFile.single("avatar"), validations, usersControllers.processRegister);

//profile
router.get("/profile", authMiddleware, usersControllers.profile);

module.exports = router;