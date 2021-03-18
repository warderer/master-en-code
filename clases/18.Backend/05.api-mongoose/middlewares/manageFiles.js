const uploadImage = require('../utils/storage');
module.exports = (req, res, next) => {

    if(process.env.NODE_ENV === "production") {
        if(!req.file) res.status(400).send({message:"No se envio ninguna imagen"});
        const url = uploadImage(req.file);
        req.body.photo = url;
        console.log("Production")
    } else {
        req.body.photo = `${req.protocol}://${req.host}/${req.file.path}` // en path viene la ubicación de mi archivo.
        console.log("No es production")
    }
    next();

}