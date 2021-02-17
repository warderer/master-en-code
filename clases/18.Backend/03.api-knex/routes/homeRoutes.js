const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.post('/home', (homeController.createHome));
router.get('/homes', (homeController.findAllHomes));

module.exports = router;