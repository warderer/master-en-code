const express = require('express');

const router = express.Router();

//Ya no usamos APP, sino router para crear las rutas.
router.get('/', (req, res) => {
    res.send( {message: 'esto viene desde el archivo myRoutes.js'} )
});

//module.exports
//Permitimos que router pueda ser llamado en cualquier otro archivo.
module.exports = router;