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

router.get("/login", usersControllers.login);
router.get("/register", usersControllers.register);
router.post("/register", uploadFile.single("avatar"), validations, usersControllers.processRegister);

module.exports = router;