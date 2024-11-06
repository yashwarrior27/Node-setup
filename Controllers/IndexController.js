const { ResponseBuilder } = require("../Helper/ResponseBuilder");

exports.Index=async(req,res)=>{
    try
    {
       return ResponseBuilder.Success(res,'Success',ResponseBuilder.success);  
    }
    catch(err)
    {
        Log('API-GET/Index/Index',err,'error');
        if(!res.headersSent)
        return ResponseBuilder.Fail(res,ResponseBuilder.ErrorMessage(err),ResponseBuilder.serverError); 
    }
}