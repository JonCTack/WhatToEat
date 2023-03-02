const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const favSchema = new Schema({
    recipe: {
        type: Object
    }
}, {timestamps: true});

module.exports = favSchema