const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const PORT = 3031;

app.use(express.static('public'));
app.use("/", mainRoutes);
app.set("view engine", "ejs")

app.listen(PORT, ()=>console.log('Servidor corriendo en el puerto 3031'));