const express = require('express');
const router = express.Router();
const {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
} = require('../controllers/userController');


//Get all users
router.get('/',getAllUsers);

//Get single student
router.get('/:id',getUserById);

//Create a new student
router.post('/',createUser);

//Delete a student
router.delete('/:id',deleteUser);

//Update a student
router.patch('/:id',updateUser);

module.exports = router;
