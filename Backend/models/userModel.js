const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of the Student Document
const UserSchema = new Schema({
    user_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model('user',UserSchema);