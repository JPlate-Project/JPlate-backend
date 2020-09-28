const db = require('./db');
const { Product } = require('./models/index');
const productDummyData = require('./productDummyData');

function seed() {
  // const products = await Promise.all(
  //   productDummyData.map(product => {
  //     return Product.create(product);
  //   })
  // );
  // console.log(`seeded ${products.length} plates successfully!`);

  // Product.create({
  //   name: 'Plain White Plate',
  //   price: 25.00,
  //   quantity: 100,
  //   imageURL: 'https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/202009/3479/img4o.jpg',
  //   description: 'Classic round white dining plate.',
  // });
  console.log('1', Product, '2', typeof Product, '3', Product.create, '4', Product.create({}));
  console.log('wtf mang!');
}

function runSeed() {
  console.log('...seeding');
  seed();
}

runSeed();

module.exports = seed;
