const express = require('express');
const app = express();
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes")
const methodOverride =  require('method-override');
const PORT = 3031;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes)

app.listen(PORT, ()=>console.log('Servidor corriendo en el puerto 3031'));