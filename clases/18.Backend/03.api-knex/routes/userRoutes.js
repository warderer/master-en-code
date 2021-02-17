const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user', (userController.createUser));
router.get('/users', (userController.findAllUsers));
router.get('/user/:idUser', (userController.findOneUser));

module.exports = router;