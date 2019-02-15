const express = require('express');
const UserService = require('../services/userService');
const userManager =  require('../db/config').userManager;

//create an instance of userService 
const userService = new UserService(userManager);

// Require controller modules.
const userController = require('../controllers/userController')(userService);

const router = express.Router();
//routes
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/register', userController.save);
router.put('/:id', userController.update);
router.delete('/:id', userController.deleteUser);

module.exports = router;