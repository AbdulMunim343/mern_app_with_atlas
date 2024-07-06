const express = require('express');
const router = express.Router();

///Get all students
router.get('/',(req, res) => {
    res.json({msg:'get student'})
});

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
