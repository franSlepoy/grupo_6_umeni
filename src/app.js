const express = require('express');
const session = require('express-session');
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes")
const methodOverride =  require('method-override');
const PORT = 3031;

app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.set("views",path.join(__dirname, "views"))

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/user", usersRoutes)

app.listen(PORT, ()=>console.log('Servidor corriendo en el puerto 3031'));