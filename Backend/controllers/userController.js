const User = require('../models/userModel');
const mongoose = require('mongoose');


//login user 
const loginUser = async () => {

}

//signup user 
const signupUser = async (req,res) => {
    const { email, password } = req.body;
    // Add to DB
    try {
        const user = await User.convertpassToHash(email, password);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get all users
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
};

// Get single user
const getUserById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user not found' });
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json(user);
};

//Delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user not found' });
    }

    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json({ message: 'user deleted' });
};

//Update a user
const updateUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'user not found' });
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!user) {
        return res.status(404).json({ error: 'user not found' });
    }
    res.status(200).json({ message: 'user Updated' });
};

// Export the functions
module.exports = {
    signupUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
};
