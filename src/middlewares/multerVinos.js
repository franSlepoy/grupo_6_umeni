const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../Public/images/productos"));
    },
    filename: function (req, file, cb) {
      cb(null, "imagen" + Date.now()+path.extname(file.originalname))
    }
  })

  const upload = multer({ storage: storage })

  module.exports = upload