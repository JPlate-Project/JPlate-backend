const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';

async function establishDB() {
  const db = await new Sequelize(dbURL, {
    // host: 'ec2-34-198-243-120.compute-1.amazonaws.com',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  });

  console.log(db)

}

establishDB()
// function authenticateDB(db) {
//   try {
//     db.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
// authenticateDB();

// module.exports = db;
