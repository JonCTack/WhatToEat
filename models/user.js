const mongoose = require('mongoose');
const favoriteSchema = require('./favoriteSchema')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 3,
        required: true,
        select: false,
    },
    favorites: [favoriteSchema]
},
{
    timestamps:true,
}
);

const User = mongoose.model('Users', userSchema);

module.exports = User;