const db = require('./db');
const Products = require('./models/products');
const productDummyData = require('./productDummyData');

async function runSeed() {
  console.log('...seeding');
  try {
    const products = await Promise.all(
      productDummyData.map((product) => {
        console.log(product.name);
        return Products.create(product);
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
