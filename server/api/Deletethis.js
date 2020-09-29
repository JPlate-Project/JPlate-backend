
const Product = require('../db/models/products');

async function test(){
    try {
      const plates =  await Product.findAll();
      console.log(plates)
    } catch (err) {
      next(err);
    }

}

test()