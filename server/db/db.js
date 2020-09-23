const Sequelize = require('sequelize');

const db = new Sequelize(
  'postgres://lqzklnfccmzwxx:bbca2824645f4a8856884d8dc29c1c3a921b3c1dd82144b5c7531c4588e7320d@ec2-34-230-231-71.compute-1.amazonaws.com:5432/df1a0ott3es0vr',
  {
    logging: false,
  }
);

module.exports = db;
