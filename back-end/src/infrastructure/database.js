const mongoose = require('mongoose');
const { UserSchema } = require('../models/userModel');
const { ProductSchema } = require('../models/productModel');


const uri = `mongodb+srv://user:user@cluster0.rqysryl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserModel = mongoose.model('UserModel', UserSchema);
const ProductModel = mongoose.model('ProductModel', ProductSchema);

module.exports = {
    UserModel,
    ProductModel,
};