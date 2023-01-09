const express=require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.listen(PORT,()=>console.log(`Servidor Corriendo en: ${PORT}`));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/carrito.html"));
});

// app.get('/register', (req,res)=>{
//     res.sendFile(__dirname + '/views/register.html');
// });

// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/login.html');
// });

// app.get('/login', (req,res)=>{
//     res.sendFile(__dirname + '/views/carrito.html');
// });

