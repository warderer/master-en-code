
exports.up = function(knex) {
    // con knex.schema.table puedo solicitar una tabla existente.
    return knex.schema.table('homes', (table) => {
        // Aqui puedo manipular la tabla homes.
        
        // Quiero hacer un rename de una columna.
        // renameColumn('nombreActual','nombreNuevo').
        table.renameColumn('description','detail');

        // Agregar una columna a mi table y que sea foranea.
        // references: Indicar a que tabla y columna hace referencia.
        table.integer('fk_user').unsigned().references('users.user_id');
    })
};

exports.down = function(knex) {

};
