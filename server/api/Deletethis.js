
const Product = require('../db/models/products');

async function test(){
    console.log('before functioin')
    const plates =  Product.findAll().then( () => {
        console.log("we made it ")
    }).catch(err => console.log(err));

    console.log(plates)


}

test()