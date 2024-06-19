Proyecto Experimental de Backend con Node.js
Este es un proyecto experimental de Backend desarrollado con Node.js, utilizando Express.js para la creación de una API REST. El objetivo es proporcionar una API que permita manipular una base de datos a través de operaciones POST, PATCH, DELETE, entre otras, usando la herramienta Insomnia. Esta API está diseñada para simular una API de una tienda falsa (Fake Store API).

Descripción del Proyecto
Este proyecto incluye una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de productos, simulando la funcionalidad de una tienda en línea. La API está desplegada en Vercel y puede ser accesada mediante las siguientes URL:

Base URL de la API: https://store-express-blond.vercel.app/api/
URL de la API de productos: https://store-express-blond.vercel.app/api/v1/products/
Endpoints
Crear un Producto
URL: /api/v1/products/
Método: POST
Descripción: Crea un nuevo producto.
Cuerpo de la Solicitud:
json
Copiar código
{
  "name": "Nombre del producto",
  "price": "Precio del producto",
  "description": "Descripción del producto"
}
Obtener todos los Productos
URL: /api/v1/products/
Método: GET
Descripción: Obtiene una lista de todos los productos.
Obtener un Producto por ID
URL: /api/v1/products/:id
Método: GET
Descripción: Obtiene un producto específico por su ID.
Actualizar un Producto
URL: /api/v1/products/:id
Método: PATCH
Descripción: Actualiza la información de un producto específico.
Cuerpo de la Solicitud:
json
Copiar código
{
  "name": "Nuevo nombre del producto",
  "price": "Nuevo precio del producto",
  "description": "Nueva descripción del producto"
}
Eliminar un Producto
URL: /api/v1/products/:id
Método: DELETE
Descripción: Elimina un producto específico por su ID.
Instalación
Clona el repositorio:

sh
Copiar código
git clone https://github.com/tu-usuario/store-express-blond.git
Navega al directorio del proyecto:

sh
Copiar código
cd store-express-blond
Instala las dependencias:

sh
Copiar código
npm install
Uso
Inicia el servidor de desarrollo:

sh
Copiar código
npm start
La API estará disponible en http://localhost:3000/api/.

Testing con Insomnia
Para probar la API puedes usar Insomnia. A continuación se presentan algunos ejemplos de cómo configurar las solicitudes en Insomnia.

Crear un Producto:

Método: POST
URL: https://store-express-blond.vercel.app/api/v1/products/
Cuerpo:
json
Copiar código
{
  "name": "Producto de prueba",
  "price": 100,
  "description": "Descripción del producto de prueba"
}
Obtener todos los Productos:

Método: GET
URL: https://store-express-blond.vercel.app/api/v1/products/
Actualizar un Producto:

Método: PATCH
URL: https://store-express-blond.vercel.app/api/v1/products/:id
Cuerpo:
json
Copiar código
{
  "name": "Producto actualizado",
  "price": 150,
  "description": "Descripción actualizada del producto"
}
Eliminar un Producto:

Método: DELETE
URL: https://store-express-blond.vercel.app/api/v1/products/:id
Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue los siguientes pasos para contribuir:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza los cambios necesarios y commitea tus cambios (git commit -am 'Añadir nueva funcionalidad').
Haz push a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.

Contacto
Para cualquier pregunta o sugerencia, puedes contactarme a través de baquerojuan99@gmail.com
