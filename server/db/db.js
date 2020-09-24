const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';
const db = new Sequelize(dbUrl, { logging: console.log });

module.exports = db;
