const path = require('path');

const createProduct = (req, res) => {
  return res.render(path.resolve('src/views/admin/createProduct.ejs')) 
  
}
const deletteProduct = (req, res) => {
  return res.render(path.resolve('src/views/admin/deletteProduct.ejs')) 
  
}
module.exports= {createProduct, deletteProduct}