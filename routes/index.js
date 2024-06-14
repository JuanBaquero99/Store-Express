const express = require('express'); //Agregamos express

const productsRouter = require('./products.router'); //Agregamos la ruta de productos
const usersRouter = require('./users.router') //Agregamos la ruta de usuarios

function routerApi (app) { //Agregamos la función routerApi. Lo que hace es recibir la aplicación de express
  const router = express.Router(); //Creamos un objeto router que nos permite definir rutas
  app.use('/api/v1', router); //Usamos el router en la aplicación de express
  router.use('/products', productsRouter); //Agregamos la ruta de productos al router
  router.use('/users', usersRouter); //Agregamos la ruta de usuarios al router
}

module.exports = routerApi; //Exportamos la función routerApi
