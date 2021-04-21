const mongoose = require('mongoose');

// Crear un modelo de la base de datos que haga sentido para nusetras preguntas / modelo csv

const schema = new mongoose.Schema({
    device_mac: {
        type: String,
        required: true
    },
    branch_office: {
        type: Number,
        required: true,
    },
    month_tz: {
        type: Number,
        required: true
    },
    day_tz: {
        type: Number,
        required: true
    },
    day_of_week_tz: {
        type: String,
        required: true
    },
    hour_tz: {
        type: Number,
        required: true
    },
    connection_date:{
        type: Date
    },
    visitor: {
        type: Boolean,
        required: true
    },
    tiempodeses: {
        type: Number,
        required: true
    }
}, { timestamp: true});

module.exports = mongoose.model('sessioncliente', schema);