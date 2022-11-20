const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./src/data/productDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const homeController = {
	index: (req, res) => {
		return res.render(path.resolve('src/views/home.ejs'));
	},
	
    //search: (req, res) => {
	//	res.render('results')
	//},
};

module.exports = homeController;
