const Student = require('../models/studentModel');
const mongoose = require('mongoose');

// Get all students
const getAllStudents = async (req, res) => {
    const students = await Student.find({}).sort({ createdAt: -1 });
    res.status(200).json(students);
};

// Get single student
const getStudentById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Student not found' });
    }

    const student = await Student.findById(id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
};

// Create a new student
const createStudent = async (req, res) => {
    const { student_name, father_name, contact_number, course_name } = req.body;
    // Add to DB
    try {
        const student = await Student.create({ student_name, father_name, contact_number, course_name });
        res.status(200).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Export the functions
module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
};
