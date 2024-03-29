const express = require('express');
const session = require('express-session');
const app = express();
const path = require("path");
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes")
const vinosRoutes = require("./routes/vinosRoutes")
const apiVinosRoutes = require("./routes/apiVinosRoutes");
const apiUsersRoutes = require("./routes/apiUsersRoutes");
const methodOverride =  require('method-override');
const PORT = 3031;
const cookies = require('cookie-parser');
const cors = require("cors");

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false,
}));

app.use(cors());
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.set("views",path.join(__dirname, "views"))

app.use("/", mainRoutes);
app.use("/user", usersRoutes)
app.use("/vinos", vinosRoutes);

app.use("/apiVinos", apiVinosRoutes)
app.use("/apiUsers", apiUsersRoutes)

app.listen(PORT, ()=>console.log('Servidor corriendo en el puerto 3031'));