const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/jplate`;
console.log('database url', process.env.DATABASE_URL);
console.log('process env', process.env);
console.log('proces', process);
const db = new Sequelize(dbUrl, {
  logging: false,
});

module.exports = db;
