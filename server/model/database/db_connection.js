const { Pool } = require('pg');
const url = require('url');
const dotenv = require('dotenv').config();

let DATABASE_URL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'test') {
  DATABASE_URL = process.env.TEST_DATABASE_URL;
  console.log('I am the test database');
}

if (!DATABASE_URL) throw new Error('Environment variable not available');

const params = url.parse(DATABASE_URL);

const [username, password] = params.auth.split(':');

// The below commented out code and params split do the same thing
console.log('This is the param path', params.pathname.split('/')[1]);

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== 'localhost'
};

module.exports = new Pool(options);
