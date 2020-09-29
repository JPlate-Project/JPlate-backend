const db = require('./db');
const Sequelize = require('sequelize');
const { Product } = require('./models/index');
const productDummyData = require('./productDummyData');

console.log(Product);
async function seed() {
  db.sync();
  console.log('Hello from the seed function');
  const products = await Promise.all(
    productDummyData.map((product) => {
      console.log(product);
      return Product.create(product);
    })
  );

  console.log(`seeded ${products.length} plates successfully!`);
}

function runSeed() {
  console.log('...seeding');
  seed();
}

runSeed();

module.exports = seed;
