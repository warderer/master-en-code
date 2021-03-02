// Tiene como objetivo hacer una abstracción de mis funciones
// con formato base de CRUD a mi base de datos
// Este archivo es un UTIL, por lo que no debe importar Knex si no hacer uso de el.

const createModelKnex = (knex, table, returningData, tableId) => {
    const create = (body) => {
        return knex 
            .insert(body) 
            .returning(returningData)
            .into(table) 
        };

    const find = (query) => {
        return knex
            .select(returningData)
            .from(table)
            .where(query)
    };
    
    const findAll = () => {
        return knex
            .select(returningData)
            .from(table)
    };
    
    const findOne = (id) => {
        return knex
            .select(returningData)
            .from(table)
            .where({ [tableId]: id });
    }
    
    const update = (id, bodyToUpdate) => {
        return knex
            .update(bodyToUpdate)
            .from(table)
            .where( { [tableId]: id } )
            .returning(returningData)
    }
    
    const destroy = (id) => {
        return knex
            .del()
            .from(table)
            .where({ [tableId]: id })
    }
    
    const softDelete = (id) => {
        return knex
            .update({ active: false })
            .from(table)
            .where( ({ [tableId]: id }) )
    }

    return {
        create,
        find,
        findAll,
        findOne,
        update,
        destroy,
        softDelete
    }
}

module.exports = createModelKnex;