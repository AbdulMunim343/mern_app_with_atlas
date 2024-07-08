const express = require('express');
const router = express.Router();
const {
    createStudent,
    getAllStudents,
    getStudentById,
} = require('../controllers/studentController');


//Get all students
router.get('/',getAllStudents);

//Get single student
router.get('/:id',getStudentById);

//Create a new student
router.post('/',createStudent);

//Delete a student
router.delete('/:id',(req, res) => {
    res.json({msg:'get student'})
});

//Update a student
router.patch('/:id',(req, res) => {
    res.json({msg:'get student'})
});

module.exports = router;
