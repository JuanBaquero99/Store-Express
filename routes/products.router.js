const express = require('express');
const { faker } = require('@faker-js/faker'); // Import the 'faker' module from the '@faker-js/faker' package.
const router = express.Router(); //El router es un objeto que nos permite definir rutas

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(), // Corrección aquí
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => { // Ruta para filtrar productos
  res.send('This is the filter endpoint'); // Respuesta de la ruta
});

//Para no tener error con las rutas que se repiten, se debe colocar la ruta más específica primero

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Extract the 'id' parameter from the request URL.

  res.json({
    id,
    name: 'Product name',
    price: 200
  });
  // Send a JSON response with the 'id', 'name', and 'price' properties.
});

router.post('/', (req, res) => { // Ruta para crear productos
  const { body } = req.body; // Extrae el cuerpo de la solicitud
  res.status(201).json({ // Envía una respuesta JSON
    message: 'Created', // Mensaje de respuesta
    data: body // Datos de la solicitud
  });
});

module.exports = router;
