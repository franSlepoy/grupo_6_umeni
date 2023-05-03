const express= require("express");
var router = express.Router();

const apiUsersController = require("../controllers/apiUsers");

router.get("/", apiUsersController.list);
router.get("/detalle/:id", apiUsersController.show)


module.exports = router