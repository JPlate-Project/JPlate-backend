const db = require('./db');
const { Product } = require('./models/index');
const productDummyData = require('./productDummyData');

function seed() {
  db.authenticate()
  db.sync({ force: true });

  console.log('db synced!');
  const products = Promise.all(
    productDummyData.map((product) => {
      console.log(product.name);
      try {
        return Product.create(product);
      } catch (err) {
        console.log(err);
      }
    })
  );

  console.log(`seeded ${products.length} plates successfully!`);
}

async function runSeed() {
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
