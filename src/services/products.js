const {Products,Carts} = require('../../database/models');

async function addProducts(productName, price) {
    try{
        const product = await Products.create({
            productName: productName,
            price: price
        });
        return product;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function getProducts(){
    try{
        const products = await Products.findAll();
        return products;
    }
    catch(err){
        throw err;
    }
}
async function addCartProduct(productId,userName,count)
{
    try{
        const value={
           
            id:1,
            userName:"a",
            count:1
        }
        console.log(value);
        const cart = await Carts.create(value);
        console.log(cart);
        return cart;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
module.exports={addProducts,getProducts,addCartProduct};