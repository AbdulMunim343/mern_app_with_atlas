const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
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
    //validator
    if(!email || !password){
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid")
    }

    if(!validator.isStrongPassword(password)){
        throw Error("password not enough")
    }
    
    const exists = await this.findOne({email});
    
    if(exists){
        throw Error("email already in use");
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hash});

    return user;
}

UserSchema.statics.login = async function (email, password){
    //validator
    if(!email || !password){
        throw Error("All fields must be filled");
    }
    
    const user = await this.findOne({email});
    
    if(!user){
        throw Error("Incorrect email");
    }

    const match = await bcrypt.compare(password,user.password);
    
   
    if(!match){
        throw Error("Incorrect password");
    }

    return user;
}

module.exports = mongoose.model('user',UserSchema);