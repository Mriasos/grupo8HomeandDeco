const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve('public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const puerto = 3000;
app.listen(puerto, ()=> {
    console.log('iniciando')
});



const homeRouter = require('./src/routers/homeRouter')

app.use('/',homeRouter)

const cartRouter = require('./src/routers/cartRouter')

app.use('/cart',cartRouter)

const authRouter = require('./src/routers/authRouter')

app.use('/auth', authRouter)

const productRouter = require('./src/routers/productRouter')

app.use('/product',productRouter)


const adminRouter = require('./src/routers/adminRouter')

app.use('/admin',adminRouter)



