const JWT = require('jsonwebtoken');
//firma, esto debe ir como variable de entorno
const { SECRET_KEY } = process.env; //es lo mismo que const SECRET_KEY = process.env.SECRET_KEY;

module.exports = ({user_id, rol, email}) => {
    const payload = {
        user_id,
        rol,
        email
    }

    return JWT.sign(payload,SECRET_KEY,{ expiresIn:'24h'})
}