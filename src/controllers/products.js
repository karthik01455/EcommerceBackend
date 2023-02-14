const productServices = require('../services/products');
async function addProducts(req,res){
   try{
        console.log('controller')
        const {productName,price} = req.body;
        const product = await productServices.addProducts(productName,price);
        res.status(201).send(product);
   }
    catch(err){ 
        res.status(400).send(err);
    }
    
}
async function getProducts(req,res){
    try{
        const products = await productServices.getProducts();
        res.status(200).send(products);
    }
    catch(err){
        res.status(400).send(err);
    }
}
async function addCartProduct(req,res)
{console.log('controller cart')
    try{
        const cart= await productServices.addCartProduct(req.body.productId,req.userName.userName,req.body.count);
        res.status(201).send(cart);
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports={addProducts,getProducts,addCartProduct};