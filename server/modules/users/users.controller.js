import ListUsers from './users.service.js';

export default function getUsers(req,res){
  const user = ListUsers();
  res.json({users});
}