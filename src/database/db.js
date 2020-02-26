const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'dario',
    password: '1234',
    database: 'company'
});

async function getConn() {
    let conn = await pool.getConnection();
    console.log('DB is connected');
    return conn;
}

module.exports = { getConn };