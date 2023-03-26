const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const guradSchema = new Schema({
    guardid:{type:Number,required:true},
    name:  {type:String,required:true},
    dutytime: {type:Number,required:true}
});

module.exports =  mongoose.model('Guard',guradSchema)