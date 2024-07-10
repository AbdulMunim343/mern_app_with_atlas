const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of the Student Document
const StudentSchema = new Schema({
    student_name:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    contact_number:{
        type:Number,
        required:true
    },
    course_name:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('student',StudentSchema);