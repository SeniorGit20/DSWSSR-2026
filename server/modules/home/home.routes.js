import express from 'express'
//importando la accion que quiero enrutar
import renderHome from './home.controller'

//creandon un enrutador de express
const homerouter = express.Router();

//enrutando action Methods del controlador home

//GET "/"
homerouter.get('/', renderHome);

export default router;