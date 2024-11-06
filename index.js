const express= require('express');
const dotenv= require('dotenv');
const cors= require('cors');
const {configureRoutes}=require('./Routes');

const path=require('path');

dotenv.config({path:'.env'});

require('./Helper/Global');

const app=express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(require('morgan')('dev'));

app.use('/images', express.static(path.join(__dirname, 'Assets/images')));

configureRoutes(app);

const PORT=process?.env?.PORT || 3000;

const server=app.listen(PORT,()=>{
  console.log(`Server is listing on the port ${PORT}`);
 });
 

