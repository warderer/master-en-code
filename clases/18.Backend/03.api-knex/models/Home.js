// El Modelo trae los datos de la base de datos.
// No se encarga de validar datos ni resolver promesas, eso es trabajo del controlador en MVC

// Conectarme a la base de datos
// Config exporta la configuración de la INSTANCIA activa de la base de datos con sus detalles de conexión.
const knex = require('../config');

const create = (bodyHome) => {
    // Crear registro en la tabla HOMES
    // bodyHome es un objeto que contiene los valores a insertar

    return knex // Retorno una promesa para que la logica se maneje (.then y .catch) a nivel del controlador, respetando MVC.
        .insert(bodyHome) // ¿Qué datos voy a insertar? {title: titulo, address: 'x', guests: 5 }
        .returning(['title','house_id','address','guests','description','created_at']) //¿Que voy a regresar? - Select house_id, title ...
        .into('homes') // ¿De que tabla? - FROM homes
    };

const findAll = () => {
    // Obtiene todos los registros de la tabla HOMES
    return knex
        .select(['title','house_id','address','guests','description','created_at'])
        .from('homes')
};

module.exports = {
    create,
    findAll,
};