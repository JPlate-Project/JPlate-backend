const router = require('express').Router()
const {Order, itemPurchase, Product} = require('../db/models')
const db = require('../db')



router.post('/', async (req, res, next) => {
    try {
        let id;
      //req.body is the cart
      //cart will have an array of things being ordered and a quantity object
      if (req.user) {
          id = req.user.id
      } else {
          id = 3
      }
      //create a record on the order database
      let order = {
        userId: id
      }

      let newOrder = await Order.create(order);

      //create a record on the itemPurchase database for every unique item ordered

      let cart = req.body.cart
      let quantities = req.body.quantities

      cart.map(
        async (product) => {
          let name = product.name
          let quantityOrdered = quantities[name]
          let item = await Product.findByPk(product.id)
          let price = item.price

          let itemOrdered = {
            quantity: quantityOrdered,
            purchasePrice: price,
            productId: product.id,
            orderId: newOrder.id
          }

          console.log(itemOrdered, 'WHAT IS ITEM ORDERED')

          await itemPurchase.create(itemOrdered)
        }
      )
  
    res.status(200).json(newOrder.id);
    }
    catch (err) {
      next(err)
    }
  })



module.exports = router;