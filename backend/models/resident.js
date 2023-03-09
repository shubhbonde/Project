const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const residentSchema = new Schema({
    flatno: {type:Number,required:true},
    name:  {type:String,required:true},
    fammembers:  {type:Number,required:true},
    phone:  {type:Number,required:true} 
});

module.exports =  mongoose.model('Resident',residentSchema)