const express = require('express');
const router = express.Router();
const {getAllStudens} = require('./controllers/studentController');

//Get all students
router.get('/',getAllStudens);

//Get single student
router.get('/:id',(req, res) => {
    res.json({msg:'get student'})
});

//Create a new student
router.post('/',(req, res) => {
    res.json({msg:'get student'})
});

//Delete a student
router.delete('/:id',(req, res) => {
    res.json({msg:'get student'})
});

//Update a student
router.patch('/:id',(req, res) => {
    res.json({msg:'get student'})
});

module.exports = router;
