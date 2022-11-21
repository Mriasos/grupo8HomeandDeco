const path = require('path');
const fs = require('fs')


const productsFilePath = path.resolve('./src/data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// listado de todos los productos
	index: (req, res) => {
	res.render((path.resolve('src/views/productList.ejs')), {products});
		//filtrar por visitados
		//const visitedProducts = products.filter (product => product.category=="visited");
		//const insaleProducts = products.filter (product => product.category=="in-sale");

		//Devolver datos a la vista
		//const viewData = {
			//visitedProducts,
			//insaleProducts


		//}
		
		//Devolver vista con los datos
		
		//return res.render((path.resolve('src/views/productList.ejs')), viewData) ;
	},
	

	// detalle de un producto
	detail: (req, res) => {
		const productId = req.params.productId
		const productToFind = products.find((product) => product.id == productId)
		if(productToFind == undefined){
			return res.send('No se encontro el producto buscado')
		}
		return res.render((path.resolve('src/views/detail.ejs')), {productToFind: productToFind })

	},

	// Crear - Form de creacion de un producto
	create: (req, res) => {
		res.render(path.resolve('src/views/createproduct.ejs'));
	},
	
	// Create -  accion de creacion 
	store: (req, res) => {
		const camposNuevosProductos = req.body;
		camposNuevosProductos.id = products.length + 1
		products.push(camposNuevosProductos)
		const jsonProduct = JSON.stringify(products)
		fs.writeFileSync(productsFilePath, jsonProduct) 

	return res.send(camposNuevosProductos)
	},

	// Actualizar - Form para editar
	edit: (req, res) => {
		const productId = req.params.productId
		const productToFind = products.find((product) => product.id == productId)
			if(productToFind == undefined){
				return res.send('No se encontro el producto buscado')
			}
			
			return res.render((path.resolve('src/views/editProduct.ejs')), {productToFind: productToFind })
	
			
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
		
		return res.send(products[productIndex])
		
	},


	// Eliminar un producto
	destroy : (req, res) => {
		var productId = req.params.id 
        products = products.filter(function(product){
        return product.id !== productId
		})
		res.sendStatus(200)
	}
};


module.exports= controller