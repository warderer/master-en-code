module.exports = (rol) => {
    return (req,res,next) => {
        console.log(res.user.rol)
        if( rol === res.user.rol ) {
            next(); //es una función de express router
        } else {
            return res.status(403).send({ 'message': 'No tienes permiso para esto'});
        }
    }
}