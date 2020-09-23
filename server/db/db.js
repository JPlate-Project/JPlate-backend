const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL;
const db = new Sequelize(dbUrl, { logging: false });

module.exports = db;
