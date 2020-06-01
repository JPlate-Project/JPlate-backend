const router = require('express').Router();
const { Product } = require('../db/models');
const db = require('../db');
//route to get all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//route to get just one product
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      res.json(
        "We're sorry. This product is no longer available or has sold out."
      );
    }
    else { res.json(product); }
  } catch (err) {
    next(err);
  }

});

module.exports = router;
