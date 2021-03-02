const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = ({ email, password}) => {
    return new Promise((resolve,reject) => {
        UserModel.find({email})
            .then( (result) => {
                const [user] = result;
                //same es true o false, dependiendo de la comparación.
                //result es el usuario, por lo que si es correcto hay que devolver su info
                bcrypt.compare(password, user.password, function (err, same) {
                    same ? resolve({same, user}) : reject(new Error('El password es incorrecto'))
                })
            })
            .catch((error) => {
                reject(error)
            })
    })
}