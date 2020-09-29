const Sequelize = require('sequelize');
const MD5 = require('md5');
const { db } = require('../db');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: 'This email is registered with an existing account.',
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// we should use a beforeCreate function to hash the password
User.beforeCreate(async (user, options) => {
  let userPassword = await MD5(user.dataValues.password);
  user.dataValues.password = userPassword;
});

module.exports = User;
