const express = require("express");
const router = express.Router();
const path = require("path")

const multer = require("multer")

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

const uploadFile = multer({ storage })

const usersControllers = require("../controllers/usersControllers");

router.get("/login", usersControllers.login);
router.get("/register", usersControllers.register);
router.post("/register", uploadFile.single("avatar"), usersControllers.processRegister);

module.exports = router;