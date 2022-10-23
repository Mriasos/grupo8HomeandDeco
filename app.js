const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve('public');
app.use(express.static(publicPath));

const puerto = 3000;
app.listen(puerto, ()=> {
    console.log('iniciando')
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('views/home.html'))
})

app.get('/loggin', (req, res)=>{
    res.sendFile(path.resolve('views/loggin.html'))
})

app.get('/cart', (req, res)=>{
    res.sendFile(path.resolve('views/cart.html'))
})
app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('views/register.html'))
})
app.get('/product', (req, res)=>{
    res.sendFile(path.resolve('views/product.html'))
})