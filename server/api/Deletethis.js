// const Product = require('../db/models/products');
const fetch = require("node-fetch");
async function test(){
    console.log('before await')
    const plates =  await fetch('https://dog.ceo/api/breeds/image/random');
    console.log('after await')
    console.log(await plates.json())
}

test()