const pw = require("./pw");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: pw,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
