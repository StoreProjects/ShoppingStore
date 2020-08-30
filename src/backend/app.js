//Modules

const express = require('express');

const cors = require('cors');

const app = express();

const morgan = require('morgan');

app.set('port', process.env.PORT || 4000);

//middlewares:Funciones que se ejecutan antes de llegar a la rutas

app.use(cors()); //Nos permitira que 2 servidores puedan intercambiar datos

app.use(express.json()); //Nos permitira usar datos JSON y strins

app.use(morgan('dev'));

//routes

app.use('/api/user', require('./routes/User'));

app.use('/api/register', require('./routes/Register'));

app.use('/api/login', require('./routes/Login'));

app.use('/api/product', require('./routes/Products'));

app.use('api/product/:id', require('./routes/Products'));

module.exports = app;