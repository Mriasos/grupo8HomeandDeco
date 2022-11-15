const path = require('path');
const fs = require('fs')

const renderProduct = (req, res) => {
    return res.render(path.resolve('src/views/product/productList.ejs'))
}

const productsFilePath = path.resolve('./src/data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// listado de todos los productos
	index: (req, res) => {
		res.render('productList');
	},

	// detalle de un producto
	detail: (req, res) => {
		res.render('detail');
	},

	// Crear - Form de creacion de un producto
	create: (req, res) => {
		res.render('createproduct');
	},
	
	// Create -  accion de creacion 
	store: (req, res) => {
		const camposNuevosProductos = req.body;
		camposNuevosProductos.id = products.length + 1
		products.push(camposNuevosProductos)
		const jsonProduct = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, jsonProduct) 

	return res.send(products)
	},

	// Actualizar - Form para editar
	edit: (req, res) => {
		res.render('detail');
	},

	// Actualizar un producto
	update: (req, res) => {
		// Do the magic
	},

	// Eliminar un producto
	destroy : (req, res) => {
		
	}
};


module.exports= {renderProduct}