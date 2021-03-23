const Users = require('../models/Users');
// En Service van a estar todo lo que tenga que ver con la Base de Datos

const createUser = async(user) => {
    if(!user) throw new Error("No hay un usuario");
    // throw new Error regresa un error que se puede usar en un try-catch,
    // si solo hago throw "este es un error" parara la ejecución pero no se puede usar try-catch

    const dbUser = await Users.create(user);
    return dbUser;
}

// Siempre se que usa async/await, la función regresa una promesa. Podemos usar el try-catch en el nivel del controlador.
const findUsers = async() => {
    return await Users.find({});
}

const findUserbyId = async(id) => {
// Regresando una promesa de forma explicita. Aquí declaramos el try-catch en este nivel.
    // return new Promise ((resolve,reject) => {
    //     Users.findById(id)
    //     .then( (user) => {
    //         if (!user) reject(new Error("Usuario no encontrado"))
    //         resolve(user)
    //     })
    //     .catch( (error) => {
    //         reject(error)
    //     });
    // });
// Usar Async/Await me ayuda a generar menos código:
    const user = await Users.findUserbyId(id);
    if(!user) throw new Error("Usuario no encontrado")
    return user;
}

const updateUser = async (id, user) => {
    // Ejemplo de por que conservar el objeto original y trabajar sobre una copia con el spread object
    // await Registry.create({
    //     model: "User",
    //     operation: "update",
    //     object: user
    // });

    // updateOne ( {como lo voy a buscar: id}, {set modifica campos}, {new:true} regresa el usuario actualizado)
    // {...user} el spread object usado de esta forma hace una copia del objeto original, para evitar modificar el original
    if(!user) throw new Error('Se necesita un objeto usuario');
    const userDB = await Users.updateOne( {_id:id}, {$set:{...user}}, {new:true} );
    if(!userDB) throw new Error("Usuario no encontrado");
    return userDB;
}

const deleteUser = async (id) => {
    return await Users.deleteOne({_id:id});
}

module.exports = {
    createUser,
    findUsers,
    findUserbyId,
    updateUser,
    deleteUser
}