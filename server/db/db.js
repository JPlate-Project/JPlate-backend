const Sequelize = require('sequelize');
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';

const db = new Sequelize('d72c74ufbebm9m', 'iivmgedzvwjbnl', 'fa3d5e57a7e1fe5088ab0d2a0f002d95608b0caf0635b9f1ab77917777dd52da',
  {
    host: 'ec2-34-198-243-120.compute-1.amazonaws.com',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true,
    }
  });

function testDb() {
  try {
    db.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testDb();
module.exports = db;
