const express = require('express'); //Trae el paquete express
const app = express(); //Crea una instancia de express
const port = 3000; //Puerto en el que se va a correr el servidor

app.get('/', (req, res) => { //Cuando se haga una petición GET a la raíz del servidor
  res.send('Hello World!'); //Se responde con el mensaje "Hello World!"
}); //Fin de la función

app.listen(port, () => { //Se pone a escuchar el servidor en el puerto 3000
  console.log(`Example app listening at http://localhost:${port}`); //Se imprime un mensaje en la consola
});
