const express = require('express');
const router = express.Router();
const {
    createStudent,
    getAllStudents,
    getStudentById,
    deleteStudent,
    updateStudent
} = require('../controllers/studentController');


//Get all students
router.get('/',getAllStudents);

//Get single student
router.get('/:id',getStudentById);

//Create a new student
router.post('/',createStudent);

//Delete a student
router.delete('/:id',deleteStudent);

//Update a student
router.patch('/:id',updateStudent);

module.exports = router;
