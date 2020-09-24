const db = require('./db');
const models = require('./models');

models.sequelize.sync.then(() => {
  console.log('synced');
});
module.exports = db;
