const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const productsControllers = require("./controllers/productsControllers")
const PORT = 3031;

app.use(express.static('public'));
app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.set("view engine", "ejs")

app.listen(PORT, ()=>console.log('Servidor corriendo en el puerto 3031'));