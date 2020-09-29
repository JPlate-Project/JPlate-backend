const Sequelize = require('sequelize');
const db = require('../db');

console.log("are we here on the 4th line of products")

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

console.log('product',Product)
console.log('db',db)

console.log("are we here on the 36th line of products")
module.exports = Product;
