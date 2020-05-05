const Sequlize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  id: {
    type: Sequlize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequlize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequlize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequlize.STRING,
    allowNull: false,
  },
});

module.exports = User;
