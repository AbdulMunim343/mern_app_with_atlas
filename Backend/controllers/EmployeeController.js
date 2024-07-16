const Employee = require('../models/employeeModel');
const mongoose = require('mongoose');

// Get all employees
const getAllEmployees = async (req, res) => {
    const employee = await Employee.find({}).sort({ createdAt: -1 });
    res.status(200).json(employee);
};

// Get single employee
const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'employee not found' });
    }

    const employee = await Employee.findById(id);

    if (!employee) {
        return res.status(404).json({ error: 'employee not found' });
    }
    res.status(200).json(employee);
};

// Create a new employee
const createEmployee = async(req,res) => {
    const { employee_name, title, status, role } = req.body;
    // Add to DB
    try {
        const employee = await Employee.create({ employee_name, title, status, role });
        res.status(200).json(employee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//Delete a employee
const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'employee not found' });
    }

    const employee = await Employee.findOneAndDelete({_id:id});

    if (!employee) {
        return res.status(404).json({ error: 'employee not found' });
    }
    res.status(200).json({ message: 'employee deleted' });
};

//Update a employee
const updateEmployee = async(req,res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'employee not found' });
    }

    const employee = await Employee.findOneAndUpdate({_id:id},{
      ...req.body  
    });

    if (!employee) {
        return res.status(404).json({ error: 'employee not found' });
    }
    res.status(200).json({ message: 'employee Updated' });
};

// Export the functions
module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployee,
    updateEmployee
};
