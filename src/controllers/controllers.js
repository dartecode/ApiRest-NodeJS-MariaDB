const mariadb = require('../database/db');
const controller = {};

controller.getEmployees = async (req,res) =>{
    try {
        conn = await mariadb.getConn();
        const rows = await conn.query('SELECT * FROM employees');
        conn.release();
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}

controller.getEmployee = async (req,res) => {
    const { id } = req.params;
    try {   
        let conn = await mariadb.getConn();
        const rows = await conn.query('SELECT * FROM employees where id = ?', [id]);
        conn.release();
        res.json(rows[0]);
    } catch (error) {
        console.log(error);
    }
}

controller.insertEmployee = async (req,res) => {
    const { name, salary } = req.body;
    try {
        let conn = await mariadb.getConn();
        await conn.query('INSERT INTO employees(name, salary) VALUES (?,?)', [name,salary]);
        conn.release();
        res.json({Status: 'Completed'});
    } catch (error) {
        console.log(error);
    }
}

controller.updateEmployee = async (req,res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {
        let conn = await mariadb.getConn();
        const query = await conn.query(`UPDATE employees 
                                            SET name = ?, 
                                            salary = ?  
                                            WHERE id = ?`, [name,salary,id]);
        conn.release();
        res.send(query);
    } catch (error) {
        console.log(error);
    }
}

controller.deleteEmployee = async (req,res) => {
    const { id } = req.params; 
    try {
        let conn = await mariadb.getConn();
        const query = await conn.query('DELETE FROM employees WHERE id = ?', [id]);
        conn.release();
        res.send(query);
    } catch (error) {
        console.log(error);
    }
}

module.exports = controller;