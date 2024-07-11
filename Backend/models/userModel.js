const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

//Schema of the User Document
const UserSchema = new Schema({
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

// convert password in hash
UserSchema.statics.convertpassToHash = async function (email, password){
    const exists = await this.findOne({email});

    if(exists){
        throw Error("email already in use");
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hash});

    return user;
}
module.exports = mongoose.model('user',UserSchema);