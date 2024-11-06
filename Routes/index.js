const {ResponseBuilder}=require('../Helper/ResponseBuilder');

exports.configureRoutes=(app)=>{  
app.get('/',(req,res)=>{
    return ResponseBuilder.Success(res,'Server is working....',ResponseBuilder.success);
})
app.use('/api/v1/index/',require('./Apis/Index'));
}