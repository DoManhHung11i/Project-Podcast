const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const User = new Schema({
    userName: { type: String, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    userPassword: { type: String, minlength: 8, required: true, unique: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);