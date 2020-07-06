const knexConnctor = require('knex');
const knexDevelopmentConfig = require('../knexfile').development;
const client = knexConnctor(knexDevelopmentConfig);
module.exports = client;