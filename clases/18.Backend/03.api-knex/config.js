// Dependiendo de la variable de entorno del sistema usará la configuración adecuada de base de datos

//Tomamos la configuración del entorno de node, si no existe usamos development.
const env = process.env.NODE_ENV || 'development'

// env = development
const knexfile = require('./knexfile');
const knex = require('knex');

module.exports = knex(knexfile[env]);

