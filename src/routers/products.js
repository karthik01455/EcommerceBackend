const express = require('express');
const productController = require('../controllers/products');
const middleware = require('../../middleware/authenticate');
const productsRouter =express.Router();
productsRouter.post('/add',middleware.authenticateToken,productController.addProducts);
productsRouter.get('/view',middleware.authenticateToken,productController.getProducts);
productsRouter.post('/addCart',middleware.authenticateToken,productController.addCartProduct);
console.log('router');

module.exports=productsRouter;