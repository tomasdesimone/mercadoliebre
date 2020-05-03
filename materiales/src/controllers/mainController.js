const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		let ofertas = products.filter(function(element){
            return element.category=="in-sale"
        });
        let visitados = products.filter(function(element){
            return element.category=="visited"
        });
        res.render('index', { 
            title: 'Mercado Liebre Argentina',
            visitados: visitados,
            ofertas: ofertas,
        })
	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
