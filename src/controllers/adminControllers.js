const path = require('path');

const createProduct = (req, res) => {
  return res.render(path.resolve('src/views/admin/createProduct.ejs')) 
  
}

module.exports= {createProduct}