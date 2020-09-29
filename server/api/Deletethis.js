const Product = require('../db/models/products');
const fetch = require("node-fetch");
async function test(){
    console.log('before await')
    const plates =  await Product.findAll()
    console.log('after await')
    console.log(plates)
}

test()