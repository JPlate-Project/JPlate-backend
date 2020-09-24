const db = require('./db');
const sequelize = require('sequelize');
const Address = require('./models/address');
const Orders = require('./models/orders');
const Products = require('./models/products');
const Users = require('./models/users');

console.log(Address.hasMany);

try {
  Users.hasMany(Address);
  Address.belongsTo(Users);
  Users.hasMany(Orders);
  Orders.belongsTo(Users);
  Orders.hasMany(Products);
} catch (err) {
  console.log(err);
}

async function sync() {
  try {
    const result = await db.sync();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

sync();
module.exports = {
  Address,
  Orders,
  Products,
  Users,
};
