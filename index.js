const express = require('express');
const productsRouter = require('./src/routers/products');
const app = express();
const PORT = 5679;
app.use(express.json());
app.use('/products', productsRouter);
app.listen(PORT, () => {
    console.log(`Application Started in PORT: ${PORT}`);   
});