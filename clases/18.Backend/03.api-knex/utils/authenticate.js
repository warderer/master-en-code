const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = ({ email, password}) => {
    return new Promise((resolve,reject) => {
        UserModel.find({email})
            .then( (result) => {
                const [user] = result;
                if(!user) reject(new Error('El usuario no existe'));
                //same es true o false, dependiendo de la comparación.
                //result es el usuario, por lo que si es correcto hay que devolver su info
                bcrypt.compare(password, user.password, function (err, same) {
                    if (same) {
                        resolve({same, user})
                    } else {
                        reject(new Error('El password es incorrecto')); //Aqui usamos Reject por que thrown new error se ejecuta en un tiempo diferente por asincronismo
                    }
                });
            })
            .catch((error) => {
                reject(error)
            });
    });
};