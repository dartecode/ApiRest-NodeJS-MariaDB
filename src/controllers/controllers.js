const mariadb = require('../database/db');

async function getEmployees () {
    try {
        conn = await mariadb.getConn();
        const rows = await conn.query('SELECT * FROM employees');
        conn.release();
        return rows;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function getEmployee(id) {
    try {   
        let conn = await mariadb.getConn();
        const rows = await conn.query('SELECT * FROM employees where id = ?', [id]);
        conn.release();
        return rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function insertEmployee(name,salary) {
    try {
        let conn = await mariadb.getConn();
        const query = await conn.query('INSERT INTO employees(name, salary) VALUES (?,?)', [name,salary]);
        conn.release();
        return query;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function updateEmployee(id,name,salary) {
    try {
        let conn = await mariadb.getConn();
        const query = await conn.query(`UPDATE employees 
                                            SET name = ?, 
                                            salary = ?  
                                            WHERE id = ?`, [name,salary,id]);
        conn.release();
        return query;
    } catch (error) {
        console.log(error);
    }
}

async function deleteEmployee (id) {
    try {
        let conn = await mariadb.getConn();
        const query = await conn.query('DELETE FROM employees WHERE id = ?', [id]);
        conn.release();
        return query;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getEmployees, getEmployee, insertEmployee, deleteEmployee, updateEmployee }