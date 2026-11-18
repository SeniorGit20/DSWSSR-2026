import express from 'express';

import getUsers from './users.controller.js'


//creandon un enrutador de express
const usersRouter = express.Router();

//enrutando GET "/users"
usersRouter.get("/", getUsers);

export default usersRouter;
