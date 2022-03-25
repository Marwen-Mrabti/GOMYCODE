const NewUser = require('../models/user.js'); //new user Schema

//add new user to DB
exports.CreateUser = async (req, res) => {
  const newUser = new NewUser(req.body);
  try {
    await newUser.save(); //save new post to DB
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Read from DB
exports.ReadDB = async (req, res) => {
  try {
    const users = await NewUser.find();
    res.status(200).json({ msg: 'list of users', users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user's info
exports.UpdateUser = async (req, res) => {
  try {
    const user = await NewUser.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json({ msg: 'user updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete user
exports.DeleteUser = async (req, res) => {
  try {
    console.log(req.params);
    const user = await NewUser.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'user deleted', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
