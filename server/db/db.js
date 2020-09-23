const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/jplate`;
const db = new Sequelize(dbUrl, {
  logging: false,
});

console.log('did i make it here');
module.exports = db;
