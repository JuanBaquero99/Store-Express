const faker = require('faker'); // Import the 'faker' module from the 'faker' package.


class ProductsService { //To create a product service
  constructor() { //Class constructor
    this.products = []; //Initialize the 'products' property as an empty array
    this.generate(); //Call the 'generate' method to generate products
  }

  generate(size) { //Method to generate products
    const limit = size || 10;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(), // Correction here
      });
    }
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
}

module.exports = ProductsService;
