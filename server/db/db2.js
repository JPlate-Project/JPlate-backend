if (!global.hasOwnProperty('db')) {
  let Sequelize = require('sequelize');
  let sequelize = null;

  if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      port: match[4],
      host: match[3],
      logging: true
    });
  } else {
    sequelize = new Sequelize('postgres://localhost:5432/jplate');
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Product: sequelize.import('./models/products.js')
  };
}

module.exports = global.db;

// const Product = db.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: Sequelize.FLOAT,
//     allowNull: false,
//   },
//   quantity: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   imageURL: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       isUrl: true,
//     },
//   },
//   description: {
//     type: Sequelize.TEXT,
//   },
// });

// module.exports = {
//   db,
//   Product,
// };
