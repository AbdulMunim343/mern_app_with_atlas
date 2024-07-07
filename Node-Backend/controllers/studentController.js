const Student = require('./models/studentModel');
const mongoose = requier('mongoose');


//Get all students
const getAllStudens = async(req,res)=>{
    const student = await Student.find({}).sort({createdAt:-1});
    res.status(200).json(student);
}

//Get single student
const getStudentById = async(req,res)=>{
    const {id} = req.param;
    if(mongoose.Types.Object.isValid(id)){
        return res.status(404).json({error:'student not found'});
    }

    const student = await Student.findById(id);

    if(!student){
       return res.status(404).json({error:'student not found'});
    }
    res.status(200).json(student);
}

//Create a new student
const createStudent = async(req,res)=>{
    const {name,father_name,contact_name,course_name} = req.body;
    //add to db
    try{
       const student = await Student.create({name,father_name,contact_name,course_name});
       res.status(200).json(student);
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

//Delete a student


//Update a student

module.exports({
    createStudent,
    getAllStudens,
    getStudentById,
})
