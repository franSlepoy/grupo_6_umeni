var express = require("express");
var router = express.Router();
const path = require("path");
var vinosController = require("../controllers/vinosController");
const multer = require("multer");

const { body } = require("express-validator");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../Public/images/productos"));
    },
    filename: function (req, file, cb) {
      cb(null, "imagen" + Date.now()+path.extname(file.originalname))
    }
  })
const upload = multer({ storage: storage })

const validations = [
  body("nombre").notEmpty().withMessage("Tenés que escribir un nombre de vino"),
  body("descripcion").notEmpty().withMessage("Tenés que escribir una descripción"),
  body("precio").notEmpty().withMessage("Tenés que escribir un precio"),
  body("anio").notEmpty().withMessage("Tenés que escribir un año"),
  body("bodega").notEmpty().withMessage("Tenés que seleccionar una bodega"),
  body("linea").notEmpty().withMessage("Tenés que seleccionar una linea"),
  body("cepa").notEmpty().withMessage("Tenés que seleccionar una cepa"),
  body("maridaje").notEmpty().withMessage("Tenés que seleccionar un maridaje"),
  body("potencialGuardado").notEmpty().withMessage("Tenés que escribir un potencial de guardado"),
  body("volumen").notEmpty().withMessage("Tenés que escribir un volumen"),
]

router.get("/", vinosController.list);
router.get("/detalleVino/:id", vinosController.detail);

router.get("/add", vinosController.add);
router.post("/add", upload.single("imagen"),validations, vinosController.create);

router.get("/edit/:id", vinosController.edit);
router.post("/edit/:id",upload.single("imagen"),vinosController.update );

router.get("/delete/:id", vinosController.delete);
router.delete("/delete/:id", vinosController.destroy);


router.get("/cepas", vinosController.cepasList);
router.get("/tintos", vinosController.tintosList);
router.get("/blancos", vinosController.blancosList);
router.get("/espumantes", vinosController.espumantesList);
router.get("/especiales", vinosController.especialesList);





module.exports = router; 