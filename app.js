const express = require('express');
const app = express();
app.use(express.static('public'));

const port = 3001;
app.listen(port, ()=>console.log('Servidor corriendo en el puerto 3001'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/cart', (req,res)=>{
    res.sendFile(__dirname + '/views/cart.html');
}); 

app.get('/productDetails', (req,res)=>{
    res.sendFile(__dirname + '/views/productdetails.html');
});




