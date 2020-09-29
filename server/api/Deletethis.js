
const Product = require('../db/models/products');

async function test(){
    console.log('before functioin')
    const plates =  await Product.findAll();
    console.log('after functioin')
    console.log(plates)


}

test()