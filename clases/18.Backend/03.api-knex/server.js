const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// AQUÍ DEBERIAN IR LAS RUTAS
app.use('/api/v1/', homeRoutes);
app.use('/api/v1/', userRoutes);

app.listen(3000,() => {
    console.log('Server ON');
})