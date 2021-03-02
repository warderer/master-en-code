// El Modelo trae los datos de la base de datos.
// No se encarga de validar datos ni resolver promesas, eso es trabajo del controlador en MVC

// Conectarme a la base de datos
// Config exporta la configuración de la INSTANCIA activa de la base de datos con sus detalles de conexión.
const knex = require('../config');
const createModelKnex = require('../utils/createModelUtil');

const TABLE = 'homes';
const RETURNING_DATA = ['title','house_id','address','guests','detail', 'fk_user', 'created_at'];
const TABLE_ID = 'house_id';

const HomeModel = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID);

// Vamos a añadir funciones especificas para HomeModel
HomeModel.findOneWithUser = (houseId) => {
    return knex
        .select()
        .from(TABLE)
        .join('users','users.user_id', '=', `${TABLE}.fk_user`)
        .where({ [TABLE_ID]: houseId })
        //Join: Con que tabla se va a unir, 
        //Select: Podemos pedir datos especificos con [ nombre.tabla, nombre.tabla ]
}

module.exports = HomeModel;