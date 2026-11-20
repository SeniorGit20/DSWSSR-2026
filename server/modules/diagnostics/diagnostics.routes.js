import express from 'express';
import{
testLogs,
testException,
testRejection

} from "./diagnostics.controller.js"

const diagRouter = express.Router();

//test de niveles
//GET /test-logs


diagRouter.get('/test-logs',testLogs)

// prueba de manejo de exceptiosn y rejections
// acceso solo en modo de desarrollo
if(process.env.NODE_ENV !== "production"){
  //prueba de exceptions
  // GET /test-exception
  diagRouter.get('/test-exception', testException)
  //prueba de la rejection
  // GET /test-rejection
  diagRouter.get('/*test-rejection', testRejection)
}

export default diagRouter;