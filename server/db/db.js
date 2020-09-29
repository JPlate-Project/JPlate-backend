const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';

const db = new Sequelize(dbURL, {
  // host: 'ec2-34-198-243-120.compute-1.amazonaws.com',
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: true,
  },
});

function authenticateDB() {
  try {
    db.authenticate();
    console.log(db)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticateDB();

module.exports = db;
