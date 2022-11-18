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
		//res.render('productList');
		//filtrar por visitados
		const visitedProducts = products.filter (product => product.category=="visited");
		const insaleProducts = products.filter (product => product.category=="in-sale");

		//Devolver datos a la vista
		const viewData = {
			visitedProducts,
			insaleProducts


		}
		
		//Devolver vista con los datos
		res.render ('detail', viewData);
	}, 

	// detalle de un producto
	detail: (req, res) => {
		const productId = req.params.productId
		const productToFind = products.find((product) => product.id == productId)
		if(productToFind == undefined){
			return res.send('No se encontro el producto buscado')
		}
		return res.render("detail", {productToEdit: productToFind })

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
		detail: (req, res) => {
			const productId = req.params.productId
			const productToFind = products.find((product) => product.id == productId)
			if(productToFind == undefined){
				return res.send('No se encontro el producto buscado')
			}
			return res.render("editProduct", {productToEdit: productToFind })
	
			
		};
	},

	// Actualizar un producto
	update: (req, res) => {
		
	},

	// Eliminar un producto
	destroy : (req, res) => {
		
	}
};


module.exports= {renderProduct}