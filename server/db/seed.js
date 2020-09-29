const { db } = require('../db/db2');
const { Product } = require('./models/products');
const productDummyData = require('./productDummyData');

console.log('What is? --->', db.sync);

const seed = async () => {
  await db.sync({ force: true });

  console.log('Hello from the seed function');

  const products = await Promise.all(
    productDummyData.map((product) => {
      return Product.create(product);
    })
  );

  console.log(`seeded ${products.length} plates successfully!`);
  db.close();
};

seed().catch(err => {
  db.close();
  console.log('An error has occured.', err);
});

module.exports = seed;
