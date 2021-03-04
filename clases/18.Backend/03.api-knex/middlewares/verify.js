const JWT = require('jsonwebtoken');
const UserModel = require('../models/User');
const { SECRET_KEY } = process.env; //es lo mismo que const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
    const Authorization = req.get('Authorization'); //Leo la cabecera de Authorization que contiene el token.

    try{
        if(Authorization){
            const token = Authorization.replace('JWT ',''); //Formato por defecto del Token: JWT 312dasdf, quitamos JWT
            const payload = JWT.verify(token,SECRET_KEY); //JWT.verify Verifica que sea un token valido y que el token pertenezca a este backend (secret_key)
            console.log(payload);
    
            if (payload) {
                const {user_id} = payload;
                const [user] = await UserModel.find({user_id})
                    .catch(()=>res.status(400).send({'message': 'Error'}));
                if(!user) res.status(404).send({'message':'Usuario no encontrado'});
    
                // res.user: Si el usuario existe, creo una nueva KEY en el request con los datos del usuario
                // Sirve para iniciar sesión en el backend, para ocuparlo en otros middlewares o controllers.
                res.user = user; 
                console.log(res.user);
                next(); // Pasa al siguiente middleware o controller
            } else {
                res.status(401).send({'message':'Token Invalido'});
            }
        } else {
            res.status(400).send({'message':'Header no fue enviado'});
        }
    } catch(error) {
        return res.status(400).send(error)
    }
}