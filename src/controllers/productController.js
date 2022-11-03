const path = require('path');

const renderProduct = (req, res) => {
    return res.render(path.resolve('src/views/product/product.ejs'))
}

module.exports= {renderProduct}