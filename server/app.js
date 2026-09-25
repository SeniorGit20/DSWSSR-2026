//funcion para manejar errores
//❌var createError = require('http-errors');
import createError from 'http-errors'

//importa el framework express
//❌var express = require('express');

import express from 'express'
//importa modulos para manejar rutas

//❌var path = require('path');
import path from 'node:path'

//sirve para manejar las cookies
//❌var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser'

//importa modulos para manejar logs
//❌var logger = require('morgan');

import logger from 'morgan'

//importando a biblioteca
import createDebug from "debug"

import { fileURLToPath} from 'node:url'
import { dirname} from 'node:path'

//creacion del objeto debug
const debug = createDebug('dswssr-2026:server')

//creando las variables 
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


//importan las rutas de la aplicacion
//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js'
//var usersRouter = require('./routes/users');
import usersRouter from './routes/users.js'

//crea la aplicacion de express
debug("🔨 Creando backend")
var app = express();

// view engine setup
//configura el motor de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//configura los midelwares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//configurar la carpeta de archivos estaticos
debug("🔨Creando servidor de archivos estaticos")
app.use(express.static(path.join(__dirname,'..', 'public')));

//registramos rutas
debug("🛤️Registrando rutas")
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app;
