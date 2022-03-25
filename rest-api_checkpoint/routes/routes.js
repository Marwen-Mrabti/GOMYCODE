const express = require('express');
const router = express.Router();

const { CreateUser, ReadDB, UpdateUser, DeleteUser } = require('../controllers');

//add user
router.post('/add', CreateUser);

//read from DB
router.get('/read', ReadDB);

//update user
router.put('/update/:id', UpdateUser);

//delete user
router.delete('/delete/:id', DeleteUser);

module.exports = router;
