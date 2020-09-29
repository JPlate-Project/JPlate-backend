const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';
const db = new Sequelize(dbURL, {
  logging: console.log
});

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

module.exports = {
  db,
  Product,
};
