const knex = require('../config');

const create = (bodyUser) => {
    return knex
        .insert(bodyUser) 
        .returning(['user_id','name','last_name','email','phone','description','created_at'])
        .into('users')
    };

const findAll = () => {
    return knex
        .select(['user_id','name','last_name','email','phone','description','created_at','active'])
        .from('users')
};

const findOne = (userId) => {
    return knex
        .select(['user_id','name','last_name','email','phone','description','created_at','active'])
        .from('users')
        .where({ user_id: userId });
}

module.exports = {
    create,
    findAll,
    findOne,
};