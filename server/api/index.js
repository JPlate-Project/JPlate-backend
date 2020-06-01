const router = require('express').Router();
module.exports = router;

router.use('/users', require('./usersRoutes'));

router.use('/products', require('./productsRoutes'));

router.use('/checkout', require('./ordersRoutes'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
