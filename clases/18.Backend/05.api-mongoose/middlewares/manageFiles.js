const uploadImage = require('../utils/storage');
module.exports = (req, res, next) => {

    if(process.env.NODE_ENV === "production") {
        if(!req.file) return next(); //No hago obligatorio subir una imagen
        const url = uploadImage(req.file);
        req.body.photo = url;
        console.log("Production")
    } else {
        if(!req.file) return next(); //No hago obligatorio subir una imagen
        req.body.photo = `${req.protocol}://${req.host}/${req.file.path}` // en path viene la ubicación de mi archivo.
        console.log("No es production")
    }
    next();

}