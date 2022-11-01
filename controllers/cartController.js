const path = require('path');

const renderCart = (req, res) => {
    return res.sendFile(path.resolve('views/cart.html'))
}

module.exports= {renderCart}