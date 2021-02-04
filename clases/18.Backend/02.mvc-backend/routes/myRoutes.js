const express = require('express');
const homeController = require('../controllers/homeController');
const createPetController = require('../controllers/createPetController');

const router = express.Router();

//Ya no usamos APP, sino router para crear las rutas.
// router.get('/', (req, res) => {
//     res.send( {message: 'esto viene desde el archivo myRoutes.js'} )
// });

router.get('/', homeController);

router.post('/api/pets', createPetController);

//module.exports
//Permitimos que router pueda ser llamado en cualquier otro archivo.
module.exports = router;