import homeRouter from '../modules/home/home.routes.js'
import diagRouter from '../modules/diagnostics/diagnostics.routes.js';

 
//export default homeRouter

export {
  homeRouter,
  diagRouter,
}


ex
// import express from 'express';
// import logger from '../lib/winston.js';
 
// const indexRouter = express.Router();
 
// let counter = 0;
// const numbers = []
 
// /* GET home page. */
// // eslint-disable-next-line
// indexRouter.get('/', function(req, res, next) {
//   counter+=1;
//   numbers.push(counter)
//   res.render('index', { title: 'Jose Armando',
//     counter,
//     numbers
//   });
// })