const db = require("../Models/db");
const multer = require('multer');
const path=require('path');
const fs=require('fs');


exports.Helper={

    ReverseOBJ:(obj)=>{
        const reversed = {};
        const entries = Object.entries(obj);
        for (let i = entries.length - 1; i >= 0; i--) {
            const [key, value] = entries[i];
            reversed[key] = value;
        }
        return reversed;
    },

    RegisterID:async(min=1000000,max=9999999)=>{
      let code='LU'+(Math.floor(Math.random() * (max - min + 1)) + min);
      if(!await db('users').select('register_id').where('register_id',code).first())
          return code;
        return this.RegisterID();
    },
    BaseUrl:(req)=>`${req.protocol}://${req.get('host')}`,

    UploadImage:(location)=>{

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              const uploadDir = location;
              if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir);
              }
              cb(null, uploadDir);
            },
            filename: function (req, file, cb) {
              cb(null, Date.now() + path.extname(file.originalname));
            }
          });

         return multer({
            storage: storage,
            limits: { fileSize: 5 * 1024 * 1024 },
            fileFilter: function (req, file, cb) {
           
                if (!file.mimetype.startsWith('image/')) {
                  return cb(new Error('Invalid image type.'), false);
                }
                cb(null, true);
              } 
          });            
    },
    RemoveImage:(location)=>{ try{fs.unlinkSync(location)}catch(err){Log('remove Image',err,'error')}}
};