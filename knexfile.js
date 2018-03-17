// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'myapp_test',
      user:     'root',
      password: 'root'
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
