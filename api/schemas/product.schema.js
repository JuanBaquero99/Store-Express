const joi = require('joi'); //Para permitir y restringir ciertos tipos de información

const id = joi.string().guid();
const name = joi.string().alphanum().min(3).max(30);
const price = joi.number().integer().min(0);
const image = joi.string().uri();

const createProductSchema = joi.object({ //Reune todos los campos
    name: name.required(),
    price: price.required(),
    image: image.required()
});

const updateProductSchema = joi.object({
    name: name,
    price: price
});

const getProductSchema = joi.object({
    id: id.required()
});

module
    .exports = {
        createProductSchema,
        updateProductSchema,
        getProductSchema
    };
