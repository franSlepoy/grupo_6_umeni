var express = require("express");
var router = express.Router();
const path = require("path");
var vinosController = require("../controllers/vinosController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../Public/images"));
    },
    filename: function (req, file, cb) {
      cb(null, "imagen" + Date.now()+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage })

router.get("/", vinosController.list);
router.get("/detalleVino/:id", vinosController.detail);

router.get("/add", vinosController.add);
router.post("/add", upload.single("imagen"), vinosController.create);

router.get("/edit/:id", vinosController.edit);
router.post("/edit/:id",upload.single("imagen"),vinosController.update );

router.post("/delete/:id", vinosController.delete)

router.get("/cepas", vinosController.cepasList);
router.get("/tintos", vinosController.tintosList);
router.get("/blancos", vinosController.blancosList);
router.get("/espumantes", vinosController.espumantesList);
router.get("/especiales", vinosController.especialesList);





module.exports = router; 