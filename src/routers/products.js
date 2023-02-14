const express = require('express');
const productController = require('../controllers/products');
const middleware = require('../../middleware/authenticate');
const productsRouter =express.Router();
productsRouter.post('/add',productController.addProducts);
productsRouter.get('/view',productController.getProducts);
productsRouter.post('/addCart',productController.addCartProduct);
console.log('router');
module.exports=productsRouter;