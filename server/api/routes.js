const router = require('express').Router();
const db = require('../db/db');
const Product = require('../db/models/products');
const User = require('../db/models/users');
const MD5 = require('md5');

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
        console.log(req.session);
        res.status(200).send('Log In Successful');
      } else {
        res.status(400).json('Authentication failed');
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
