const { Pool } = require("pg");

const { DB_USERNAME, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

pool
  .connect()
  .then(() => console.log("DB connected successfully, Go Ahead......."))
  .catch((e) => console.log(e));

module.exports = pool;
