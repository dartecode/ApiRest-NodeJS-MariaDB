const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.getEmployees);

router.get('/:id', controllers.getEmployee);

router.post('/', controllers.insertEmployee);

router.put('/update/:id', controllers.updateEmployee);

router.delete('/delete/:id', controllers.deleteEmployee);

module.exports = router;