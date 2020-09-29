const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';

const db =  new Sequelize(dbURL);

console.log(db)
module.exports = db;
