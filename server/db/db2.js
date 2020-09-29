const Sequelize = require('sequelize');
const dbURL = process.env.DATABASE_URL || 'postgres://localhost:5432/jplate';
const db = new Sequelize(dbURL);

const Product = db.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: 'This email is registered with an existing account.',
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.DataTypes.JSON),
    allowNull: false,

  },
  userEmail: {
    type: Sequelize.STRING,
    allowNull: true
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
});

const Address = db.define('address', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
Order.hasMany(Product);

module.exports = {
  db,
  Product,
  User,
  Order,
  Address
}
