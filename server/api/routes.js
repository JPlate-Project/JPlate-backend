const router = require('express').Router();
const db = require('../db/db');
const MD5 = require('md5');
const Product = require('../db/models/products');
const User = require('../db/models/users');
const Order = require('../db/models/orders');

router.get('/getOrders/:userEmail', async (req, res, next) => {
  try {
    const allOrders = await Order.findAll({
      where: {
        userEmail: req.params.userEmail
      }
    });
    res.send(allOrders);
  } catch (err) {
    next(err);
  }
});

router.patch('/resetPassword', async (req, res, next) => {

  const updatedPassword = {
    password: await MD5(req.body.newPassword)
  };

  const currentUser = {
    where: {
      id: req.body.userId
    }
  };

  await User.update(updatedPassword, currentUser).then(result => { console.log(result) });
  res.send('200')

});

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
      console.log(password)
      console.log(passwordMatch)
      if (passwordMatch[0]) {
        const session = req.session;
        if (!session.counter) session.counter = 0;
        ++session.counter;
        session.cookie.maxAge = 60 * 60 * 24 * 7;
        session.firstName = emailFound[0].dataValues.firstName;
        session.lastName = emailFound[0].dataValues.lastName;
        session.email = emailFound[0].dataValues.email;
        session.userId = emailFound[0].dataValues.id;
        res.status(200).send(session);
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
    userEmail: req.body.email,
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

    await Product.update(updatedQuantity, currentItem).then(result => { });
  }

});

module.exports = router;
