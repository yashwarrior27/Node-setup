const jwt = require('jsonwebtoken');
const { ResponseBuilder } = require('../Helper/ResponseBuilder');
const db = require('../Models/db');

const AuthenticateToken=(req,res,next)=>{

  const authHeader = req.headers['authorization'];
 
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) 
    return ResponseBuilder.Fail(res,'Authorization header not found',ResponseBuilder.badRequest);
  
  jwt.verify(token, process.env.SECRET_KEY, async(err, user) => {

    if (err)
        return ResponseBuilder.Fail(res,'Invalid token',ResponseBuilder.forbidden);
     
    let auth=await db('users').where('id',user.id).whereNull('deleted_at').first();

    if(!auth || auth.status!==1 || auth._token!==token)
        return ResponseBuilder.Fail(res,'Invalid token',ResponseBuilder.forbidden);

    req.user = auth;
    next();
  });

}

module.exports=AuthenticateToken;