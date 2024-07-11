const express = require('express');
const router = express.Router();
const {
    signupUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
} = require('../controllers/userController');


//Get all users
router.get('/',getAllUsers);

//Get single student
router.get('/:id',getUserById);

//signup user
router.post('/',signupUser);

//Delete a student
router.delete('/:id',deleteUser);

//Update a student
router.patch('/:id',updateUser);

module.exports = router;
