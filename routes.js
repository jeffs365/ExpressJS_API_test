const Router = require('express').Router;
const router = new Router();

const customer = require('./model/customer/router');
const movie = require('./model/movie/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to yoapi API!' });
});

router.use('/customer', customer);
router.use('/movie', movie);

module.exports = router;
