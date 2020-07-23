const router = require('express').Router();
const db = require('../db/db');
const Product = require('../db/models/products');
const User = require('../db/models/users');

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
    const newUser = User.findAll({
      where: {
        email: req.body.email
      }
    });
    if (newUser) {
      await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
      res.sendStatus(201);
    } else {
      //let the user know that an account is associated with this email.
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
