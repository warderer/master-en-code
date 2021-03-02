const JWT = require('jsonwebtoken');
//firma, esto debe ir como variable de entorno
const SECRET_KEY = '6cYPrkv2HNzX5ehJyrww3A8t1gxYKzUtNu3EIhdfCMhGZCrZf+W53g=='

module.exports = ({id_user, rol, email}) => {
    const payload = {
        id_user,
        rol,
        email
    }

    return JWT.sign(payload,SECRET_KEY,{ expiresIn:'24h'})
}