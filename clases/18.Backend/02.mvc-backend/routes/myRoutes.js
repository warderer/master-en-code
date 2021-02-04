const express = require('express');
const {
    homeController,
    createPetController,
    exercisesController
    } = require('../controllers/');

const router = express.Router();

//Ya no usamos APP, sino router para crear las rutas.
// router.get('/', (req, res) => {
//     res.send( {message: 'esto viene desde el archivo myRoutes.js'} )
// });

router.get('/', homeController);

router.post('/api/pets', createPetController);

/* Ejercicio: Importar rutas de Ejercicios de proyecto MiPrimerBackend y crear Controladores */
router.get('/api/',exercisesController.getHola); // Exercise #1
router.get('/api/suma', exercisesController.getSuma); // Exercise #2
router.get('/api/usuario/:nombre',exercisesController.getUserByName); // Exercise #3
router.get('/api/swapi/:idPersonaje', exercisesController.getSwapiCharById); // Exercise #4
router.post('/api/suma', exercisesController.postSuma); // Exercise #5
router.put('/api/devolver', exercisesController.putBody); // Exercise #6
router.delete('/api/borrar/:id', exercisesController.deleteById); // Exercise #7

//module.exports
//Permitimos que router pueda ser llamado en cualquier otro archivo.
module.exports = router;