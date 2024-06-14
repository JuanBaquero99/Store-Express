const express = require('express');
const router = express.Router(); // El router es un objeto que nos permite definir rutas

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  // Extrae los parámetros de consulta 'limit' y 'offset' de la URL de la solicitud.

  if (limit && offset) {
    res.json({
      limit,
      offset
    });
    // Si 'limit' y 'offset' existen en la solicitud, envíalos como una respuesta JSON.
  } else {
    res.send('No limit or offset');
    // Si 'limit' y 'offset' no existen en la solicitud, envía una respuesta de texto que diga "No limit or offset".
  }
});

module.exports = router;
