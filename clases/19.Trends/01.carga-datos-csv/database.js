require('dotenv').config();
const mongoose = require('mongoose');
const SesionCliente = require('./SesionCliente');

mongoose.connect(process.env.MONGO_URI);

module.exports = {
    SesionCliente,
}