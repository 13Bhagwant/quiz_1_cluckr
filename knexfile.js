module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'cluckr',
      
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};