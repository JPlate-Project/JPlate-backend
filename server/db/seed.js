const db = require('./db');
const { Product } = require('./models/index');
const productDummyData = require('./productDummyData');

async function seed() {
  // const products = await Promise.all(
  //   productDummyData.map(product => {
  //     return Product.create(product);
  //   })
  // );
  // console.log(`seeded ${products.length} plates successfully!`);

  await Product.create({
    name: 'Plain White Plate',
    price: 25.00,
    quantity: 100,
    imageURL: 'https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/202009/3479/img4o.jpg',
    description: 'Classic round white dining plate.',
  });


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
