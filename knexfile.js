// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development:{
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'Bitroot'
    },
    pool: {
      min: 2,
      max: 20,
  
    },
    migrations: {
      directory: './Migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '123456',
      database: 'Bitroot'
    },
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      directory:'./Migrations'
    }
  }

};
