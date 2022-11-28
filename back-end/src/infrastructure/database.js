const mongoose = require('mongoose');
const { UserSchema } = require('../models/userModel');

const uri = `mongodb+srv://user:user@cluster0.rqysryl.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = {
    UserModel,
};