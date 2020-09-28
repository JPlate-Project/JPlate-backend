const db = require('./db');
const Product = require('./models/products');
const productDummyData = require('./productDummyData');

async function seed() {
  // const products = await Promise.all(
  //   productDummyData.map(product => {
  //     return Product.create(product);
  //   })
  // );
  // console.log(`seeded ${products.length} plates successfully!`);
  const firstOne = productDummyData[0];
  await Product.create({ firstOne });
  console.log("i made it here")

}

function runSeed() {
  console.log('...seeding');
  try {
    seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

runSeed();

module.exports = seed;
