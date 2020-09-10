const router = require('express').Router();
const db = require('../db/db');
const MD5 = require('md5');
const Product = require('../db/models/products');
const User = require('../db/models/users');
const Order = require('../db/models/orders');

router.get('/getPlates', async (req, res, next) => {
  try {
    const plates = await Product.findAll();
    res.send(plates);
  } catch (err) {
    next(err);
  }
});

router.post('/users', async (req, res, next) => {
  try {
    const newUser = await User.findAll({
      where: {
        email: req.body.email
      }
    });
    if (!newUser[0]) {
      await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      res.sendStatus(201);
    } else {
      res.status(401).json('NO!!');
    }
  } catch (err) {
    console.error(err);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const emailFound = await User.findAll({
      where: {
        email: req.body.email
      }
    });

    if (emailFound) {
      let password = MD5(req.body.password);
      const passwordMatch = await User.findAll({
        where: {
          password: password
        }
      });
      if (passwordMatch) {
        if (!req.session.counter) req.session.counter = 0;
        console.log('counter', ++req.session.counter);
        req.session.firstName = emailFound[0].dataValues.firstName;
        req.session.lastName = emailFound[0].dataValues.lastName;
        req.session.email = emailFound[0].dataValues.email;
        req.session.userId = emailFound[0].dataValues.id;
        // console.log(req.session);
        res.status(200).send(req.session);
      } else {
        res.status(400).json('Authentication failed');
      }
    }
  } catch (err) {
    next(err);
  }
});

router.post('/submitOrder', async (req, res, next) => {

  await Order.create({
    items: req.body.items,
    total: req.body.total,
    userId: req.body.email,
    date: (new Date()).toLocaleDateString()
  }).then(() => {
    res.sendStatus(201);
  });

  for (let i = 0; i < req.body.items.length; i++) {

    const updatedQuantity = {
      quantity: req.body.items[i].quantity - req.body.items[i].userSelectedQuantity
    };

    const currentItem = {
      where: {
        id: req.body.items[i].id
      }
    };

    await Product.update(updatedQuantity, currentItem).then(result => {
      console.log(result);
    });
  }

});

module.exports = router;
