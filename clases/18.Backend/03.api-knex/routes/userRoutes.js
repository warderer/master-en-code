const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user', (userController.createUser));
router.get('/users', (userController.findAllUsers));
router.get('/user/:idUser', (userController.findOneUser));
router.patch('/user/:idUser', (userController.updateOneUser));
router.delete('/user/:idUser', (userController.destroyOneUser));
router.delete('/users/:idUser', (userController.softDeleteOneUser));

module.exports = router;