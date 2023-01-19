const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const port = 3030;

app.use(express.static('public'));
app.use("/", mainRoutes);
app.set("view engine", "ejs")

app.listen(port, ()=>console.log('Servidor corriendo en el puerto 3001'));