const db = require('./db');
const Product = require('./models/products');
const productDummyData = require('./productDummyData');

async function seed() {
  db.authenticate();

  const products = await Promise.all(
    productDummyData.map(product => {
      return Product.create(product);
    })
  );
  console.log("did i make it here")
  console.log(`seeded ${products.length} plates successfully!`);
}

async function runSeed() {
  console.log('...seeding');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  }
}

runSeed();

module.exports = seed;
