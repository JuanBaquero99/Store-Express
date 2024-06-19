const express = require('express');

const productsRouter = require('../../api/routes/products.router');
const categoriesRouter = require('../../api/routes/categories.router');
const usersRouter = require('../../api/routes/users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
