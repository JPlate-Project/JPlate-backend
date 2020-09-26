const db = require('../db');
const User = require('./users');
const Address = require('./address');
const Orders = require('./orders');
const Product = require('./products');

User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(Orders);
Orders.belongsTo(User);
Orders.hasMany(Product);

async function test() {
  console.log(await db.sync())
}
test()
db.sync().then(() => {
  console.log("woah woah woah")
});


module.exports = {
  User,
  Address,
  Orders,
  Product,
};
