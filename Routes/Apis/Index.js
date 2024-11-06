const express=require('express');
const { Index } = require('../../Controllers/IndexController');
const Route=express.Router();   

Route.get('/',Index);

module.exports=Route;