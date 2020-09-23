const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/jplate`;
console.log(process.eventNames.DATABASE_URL);
const db = new Sequelize(dbUrl, {
  logging: false,
});

module.exports = db;
