exports.ResponseBuilder={

    serverError : 500,
    badRequest : 400,
    unauthorized : 401,
    forbidden : 403,
    notFound : 404,
    success : 200,
    noContent : 204,
    partialContent : 206,
  
    ErrorMessage:(err)=>{
       console.log(err);
       return err.message;
    },
  
    Success:(res,message=null,code=200,data={})=>{
  
       return res.status(code).json({
         status:true,
         message:!message?'Success':message,
         data});
      },

    SuccessWithToken:(res,message=null,code=200,token,data={})=>{
         
       return res.status(code).json({
         status:true,
         message:!message?'Success':message,
         token,
         data});
      }, 
  
    SuccessWithPaginate:(res,message=null,code=200,pagination={},data={})=>{
       
      return res.status(code).json({
         status:true,
         message:!message?'Success':message,
         meta_data:this.ResponseBuilder.Pagination(pagination?.total?? 0,pagination?.paginate?? 0,pagination?.page?? 0),
         data});

    },  
    Fail:(res,message=null,code=400)=>{
  
      return res.status(code).json({
         status:false,
         message:!message?'Fail':message});
     },

    Pagination:(total=0,paginate=0,page=0)=>{
      let data={
         total_page:total==0?0:(total%paginate!=0?(Math.floor(total/paginate)+1):total/paginate),
         current_page:Number(page),
         total_item:Number(total),
         per_page:Number(paginate) 
      }
      if(data.current_page>data.total_page)
         data.current_page=data.total_page;

      return data;

    }  
        
  }
  
  