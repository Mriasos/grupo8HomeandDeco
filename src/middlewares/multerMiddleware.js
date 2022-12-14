const path = require('path');
const multer = require('multer'); 

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, './public/imagenes/users')
    },
    filename:(req,file,cb)=>{
        let fileName = `${date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
})

const uploadFile = multer({ storage });
module.exports = uploadFile;