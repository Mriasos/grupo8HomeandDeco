const path = require('path');

const createProduct = (req, res) => {
  return res.render(path.resolve('src/views/admin/createProduct.ejs')) 
  
}
const deletteProduct = (req, res) => {
  return res.render(path.resolve('src/views/admin/editProduct.ejs')) 
  
}
module.exports= {createProduct, deletteProduct}