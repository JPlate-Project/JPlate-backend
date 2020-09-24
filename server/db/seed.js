const db = require('./db');
const { Product } = require('./models/index');
const productDummyData = require('./productDummyData');

async function seed() {
  await db.sync({ force: true });

  console.log('db synced!');
  const products = await Promise.all(
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
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

runSeed();

module.exports = seed;
