const db = require('./db');
const Products = require('./models/products');
const productDummyData = require('./productDummyData');

console.log('from seed', db);

async function runSeed() {
  console.log('...seeding');
  try {
    const products = await Promise.all(
      productDummyData.map((product) => {
        console.log(product.name);
        try {
          return Products.create(product);
        } catch (err) {
          console.log(err);
        }
      })
    );
    console.log(`${products.length} products`);
    console.log(`seeded successfully`);
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
db.sync();
