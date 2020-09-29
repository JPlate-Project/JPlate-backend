const { db } = require('../db');
const Sequelize = require('sequelize');
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
  db,
  User,
  Address,
  Orders,
  Product,
};
