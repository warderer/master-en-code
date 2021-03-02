const knex = require('../config');

const createModelKnex = require('../utils/createModelUtil');

const TABLE = 'users';
const RETURNING_DATA = ['user_id','name','last_name','email','phone','description','created_at', 'rol', 'password'];
const TABLE_ID = 'user_id';

const UsersModel = createModelKnex(knex, TABLE, RETURNING_DATA, TABLE_ID);

module.exports = UsersModel;