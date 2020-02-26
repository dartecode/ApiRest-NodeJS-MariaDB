const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

async function getConn() {
    let conn = await pool.getConnection();
    console.log('Conexion a base de datos exitosa');
    return conn;
}

module.exports = { getConn };