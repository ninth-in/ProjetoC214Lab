const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        unique: true,
    },
    weight:  Number,
    quantitie: Number,
    price: Number,
    totalPrice: Number,
});

module.exports = {
    ProductSchema,
};