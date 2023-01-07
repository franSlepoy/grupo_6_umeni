const express = require("express")
const app = express()
const path = require("path")
const PORT = 3031
const public = path.join(__dirname,"/public")

app.listen(PORT, ()=> console.log("servidor corriendo"))

app.use(express.static(public))

app.get("/",(req,res)=>(res.sendFile(path.join(__dirname,"./views/productdetail.html"))))
// app.get("/login",(req,res)=>(res.sendFile(path.join(__dirname,"./views/login.html"))))
// app.get("/register",(req,res)=>(res.sendFile(path.join(__dirname,"./views/register.html"))))