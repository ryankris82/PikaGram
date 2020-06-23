
const {
  username,
  password,
  database,
  host,
} = require('./index').db;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres'
  }
};
