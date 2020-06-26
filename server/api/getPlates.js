const router = require('express').Router()
const Product = require('../db/models/products')
const db = require('../db/db')

router.get('/getPlates', async (req, res, next) => {
  try {
    const plates = await Product.findAll()
    res.send(plates)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
