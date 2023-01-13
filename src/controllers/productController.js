const path = require('path');
const fs = require('fs')


const productsFilePath = path.resolve('./src/data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// listado de todos los productos
	index: (req, res) => {
	res.render(('productList'), {product: products});
	},
	

	// detalle de un producto
	detail: (req, res) => {
		const productId = req.params.productId
		const productToFind = products.find((product) => product.id == productId)
		if(productToFind == undefined){
			return res.send('No se encontro el producto buscado')
		}
		return res.render(('detail'), {productToFind: productToFind,
		user: req.session.user})

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

		res.redirect("/")
	},

	// Actualizar - Form para editar
	edit: (req, res) => {
		const productId = req.params.productId
		const productToFind = products.find((product) => product.id == productId)
			if(productToFind == undefined){
				return res.send('No se encontro el producto buscado')
			}
			
			return res.render(('editProduct'), {productToFind: productToFind })
	
			
		},

	// Actualizar un producto
	update: (req, res) => {
		const update = req.body
		update.price = Number(update.price)
		update.discount= Number(update.discount)
		
		const productIndex = products.findIndex((product)=>{
			return product.id == req.params.id
		})
		if(productIndex == -1){
			return res.send("No existe el producto")
		}
		products[productIndex] = {...products[productIndex], ...update}

		const jsonProduct = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, jsonProduct) 
		
		res.redirect("/")
		
	},


	// Eliminar un producto
	destroy : (req, res) => {
		const productId = req.params.id
		const productsNuevo = products.filter(function(product){
		return product.id != productId
		})
		const jsonProduct = JSON.stringify(productsNuevo)
		fs.writeFileSync(productsFilePath, jsonProduct)
		
		res.redirect("/")
		}
	
};


module.exports= controller