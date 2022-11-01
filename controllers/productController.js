const path = require('path');

const renderProduct = (req, res) => {
    return res.sendFile(path.resolve('views/product.html'))
}

module.exports= {renderProduct}