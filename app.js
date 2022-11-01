const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.resolve('public');
app.use(express.static(publicPath));

const puerto = 3000;
app.listen(puerto, ()=> {
    console.log('iniciando')
});


const homeRouter = require('./routers/homeRouter')

app.use(homeRouter)


const cartRouter = require('./routers/cartRouter')

app.use(cartRouter)

const logginRouter = require('./routers/logginRouter')

app.use(logginRouter)

const productRouter = require('./routers/productRouter')

app.use(productRouter)

const registerRouter = require('./routers/registerRouter')

app.use(registerRouter)

app.set('view engine', 'ejs')
