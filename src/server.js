const express = require('express');
const app = express();
require('dotenv').config();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/routes'));

app.listen(app.get('port'), ()=>{
    console.log("Server on Port", app.get('port'));
});