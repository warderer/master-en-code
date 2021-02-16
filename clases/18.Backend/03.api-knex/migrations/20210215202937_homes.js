// Archivo creado con el comando: knex migrate:make homes
// Aquí voy a definir que atributos tiene mi tabla HOMES
exports.up = function(knex) {
    //createTableIfNotExists parametros: (como se llama la tabla, callback)
    return knex.schema.createTableIfNotExists('homes', (table) => {
        // Definición de mi tabla 'HOMES'
        table.increments('house_id').primary();
        // table.tipo_de_dato('nombre de la columna')
        table.string('title').notNullable(); //string default length 255
        table.text('description');
        table.integer('guests');
        table.text('address');
        table.boolean('active').notNullable().defaultTo(true); // La información no se suele borrar de la BD, se hace un softdelete con flags true/false
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Con una función de kenex obtenemos la fecha actual
    });
};

exports.down = function(knex) {
    //borrar tabla si existe, se puede ejecutar más lógica al eliminar una tabla.
    return knex.schema.dropTableIfExists('homes');
};

// Se corre la migración (sobre up) se ejecuta: knex migrate:latest