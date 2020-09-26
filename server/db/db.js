const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';
const db = new Sequelize(dbUrl, { logging: console.log });

async function testDb() {
  console.log('right before connecting')
  try {
    console.log(db.authenticate());
    db.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log("after authenticate")
}
testDb();
module.exports = db;
