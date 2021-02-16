// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:     'ziggy.db.elephantsql.com',
      database: 'xmjuwhfz',
      user:     'xmjuwhfz',
      password: 'SqaKpHf0WzBnXp_Zh97AsFD-YbR7Dw2E'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:     'ziggy.db.elephantsql.com',
      database: 'xmjuwhfz',
      user:     'xmjuwhfz',
      password: 'SqaKpHf0WzBnXp_Zh97AsFD-YbR7Dw2E'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:     'ziggy.db.elephantsql.com',
      database: 'xmjuwhfz',
      user:     'xmjuwhfz',
      password: 'SqaKpHf0WzBnXp_Zh97AsFD-YbR7Dw2E'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
