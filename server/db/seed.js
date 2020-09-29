const db = require('./db');
const { Product } = require('./models/index');
const { User } = require('./models/index');
const productDummyData = require('./productDummyData');

async function seed() {
  // const products = await Promise.all(
  //   productDummyData.map(product => {
  //     return Product.create(product);
  //   })
  // );

  // console.log(`seeded ${products.length} plates successfully!`);
  await User.create({
    firstName: 'Lardy',
    lastName: 'Liao',
    email: 'll@gg.com',
    password: 'fishtacos'
  });
  console.log('we f actually made it');
}

function runSeed() {
  console.log('...seeding');
  seed();
}

runSeed();

module.exports = seed;
