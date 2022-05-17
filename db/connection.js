require('dotenv').config()
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  // Your MySQL username,
  user: process.env.DB_USER,
  // Your MySQL password
  password: process.env.DB_PASSWORD,
  database: 'election'
});

module.exports = db;