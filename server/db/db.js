const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

console.log(process.env.DATABASE_URL);
module.exports = db;
