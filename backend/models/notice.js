const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticeSchema = new Schema({
notice : {type:String}
});

module.exports = mongoose.model('Notice', noticeSchema)
