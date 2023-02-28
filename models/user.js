const mongoose = require('mongoose');

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
},
{
    timestamps:true,
}
);

const User = mongoose.model('Users', userSchema);

module.exports = User;