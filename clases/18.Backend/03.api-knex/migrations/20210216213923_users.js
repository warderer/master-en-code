
exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('users', (table) => {
        // definición de la tabla users
        // table.tipo_de_dato('nombre de la columna')
        table.increments('user_id').primary(),
        table.string('name').notNullable(),
        table.string('last_name'),
        table.string('email'),
        table.string('phone'),
        table.string('description'),
        table.boolean('active').notNullable().defaultTo(true),
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
