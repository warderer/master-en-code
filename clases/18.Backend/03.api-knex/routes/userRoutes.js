const express = require('express');

const router = express.Router();
const verify = require('../middlewares/verify');
const checkRole = require('../middlewares/checkRole');

const userController = require('../controllers/userController');

router.post('/user', (userController.createUser));
router.post('/user/login', (userController.login));
router.get('/users', [verify, checkRole('admin')], (userController.findAllUsers));
router.get('/user/:idUser', [verify, checkRole('guest')], (userController.findOneUser));
router.patch('/user/:idUser', (userController.updateOneUser));
router.delete('/user/:idUser', (userController.destroyOneUser));
router.delete('/users/:idUser', (userController.softDeleteOneUser));

module.exports = router;