
const Address = require('./models/address');
const Orders = require('./models/orders');
const Products = require('./models/products');
const Users = require('./models/users');
const productDummyData = require('./productDummyData');

const db = new Sequelize(
  'postgres://lqzklnfccmzwxx:bbca2824645f4a8856884d8dc29c1c3a921b3c1dd82144b5c7531c4588e7320d@ec2-34-230-231-71.compute-1.amazonaws.com:5432/df1a0ott3es0vr',
  {
    logging: false,
  }
);

Users.hasMany(Address);
Address.belongsTo(Users);
Users.hasMany(Orders);
Orders.belongsTo(Users);
Orders.hasMany(Products);
db.sync({ force: true });

async function seed() {
  console.log('db synced!');

  const products = await Promise.all(
    productDummyData.map((product) => {
      return Products.create(product);
    })
  );

  console.log(`${products.length} products`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('...seeding');
  try {
    await seed();
  } catch (err) {
    console.log('hello from catch');
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
if (module === require.main) runSeed();

module.exports = seed;
