const express = require('express');
const myRoutes = require('./routes/myRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// AQUÍ DEBERIAN IR LAS RUTAS
    //RUTAS
    app.use(myRoutes); //Llamamos a las rutas de myRoutes
//

app.listen(3000,() => {
    console.log('Server ON');
})