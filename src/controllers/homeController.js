const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./src/data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const homeController = {
	index: (req, res) => {
		return res.render('home', {product:products});
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

    //search: (req, res) => {
	//	res.render('results')
	//},
};

module.exports = homeController;
