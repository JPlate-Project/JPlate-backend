const Sequelize = require('sequelize');
const { db } = require('../db');

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.JSON),
    allowNull: false,

  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: true
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
});

module.exports = Order;
