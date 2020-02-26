const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', async (req, res) => {
    var employees = await controllers.getEmployees();
    res.json(employees);
});

router.get('/:id',  async (req,res) => {
    const { id } = req.params;
    var employee = await controllers.getEmployee(id);
    res.json(employee);
});

router.post('/', async (req, res) => {
    const { name, salary } = req.body;
    const result = await controllers.insertEmployee(name,salary);
    if(result == null){
        console.log('Ha ocurrido un error');
    }else {
        res.json({status: 'completed'});
    }
});

router.put('/update/:id', async(req,res)=>{
    const { id } = req.params;
    const { name, salary } = req.body;
    console.log(id,name,salary);
    const result = await controllers.updateEmployee(id, name, salary);
    if(result == null){
        console.log('Ha ocurrido un error');
    }else{
        console.log(result);
        res.json({status: 'completed'});
    }
});

router.delete('/delete/:id', async (req,res) =>{
    const { id } = req.params;
    const result = await controllers.deleteEmployee(id);
    if(result == null){
        console.log('Ha ocurrido un error');
    }else{
        res.json({status: 'completed'});
    }
});

module.exports = router;