const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surname: String,
    picture: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);