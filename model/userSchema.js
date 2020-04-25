let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
})
module.exports = userSchema
