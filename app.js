const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve('public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs')
app.set('views', './views')

const adminRouter = require('./src/routers/adminRouter')

app.use('/admin',adminRouter)

const puerto = 3000;
app.listen(puerto, ()=> {
    console.log('iniciando')
});



const homeRouter = require('./src/routers/homeRouter')

app.use(homeRouter)


const cartRouter = require('./src/routers/cartRouter')

app.use(cartRouter)

const logginRouter = require('./src/routers/logginRouter')

app.use(logginRouter)

const productRouter = require('./src/routers/productRouter')

app.use(productRouter)

const registerRouter = require('./src/routers/registerRouter')

app.use(registerRouter)





