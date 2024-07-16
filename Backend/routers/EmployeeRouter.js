const express = require('express');
const router = express.Router();
const {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployee,
    updateEmployee
} = require('../controllers/EmployeeController');
const requiredAuth = require('../middleware/requireAuth');

router.use(requiredAuth);


//Get all employees
router.get('/',getAllEmployees);

//Get single employees
router.get('/:id',getEmployeeById);

//Create a new employees
router.post('/',createEmployee);

//Delete a employees
router.delete('/:id',deleteEmployee);

//Update a employees
router.patch('/:id',updateEmployee);

module.exports = router;
