const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GuardLogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    socityname: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 5
    }
});

module.exports = mongoose.model('GuardLog', GuardLogSchema)
