const User = require('./users');
const Address = require('./address');
const Orders = require('./orders');
const Product = require('./products');

User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(Orders);
Orders.belongsTo(User);
Orders.hasMany(Product);

module.exports = {
  User,
  Address,
  Orders,
  Product,
};
