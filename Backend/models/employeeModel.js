const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of the Student Document
const EmployeeSchema = new Schema({
    employee_name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('employee',EmployeeSchema);