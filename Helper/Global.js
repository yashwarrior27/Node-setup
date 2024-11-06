global.Log=(name,data={},type='',message="")=>{

    if(type=='error')
      return console.error(`\n ======= Error Log:=> ${name} =================== \n\n`,data,'\n\n============================================================================= \n');
    else if(type=='action')
      return console.info(`\n ======== Action Name :=> ${name} =================== \n\n`,`Data :=>`,data, ` \n`,`Message :=> ${message}`,'\n\n============================================================================= \n');     
    else
    {
      return console.log(`\n=============== ${name}================\n\n`,`Type : => ${type}`, `Message :=> ${message}`,`Data :=> `,data );
    }

}
