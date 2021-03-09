const { MongoClient } = require('mongodb');

let state = {
    db: null
} //Aqui vamos a guardar el estado de la conexión

//module.exports = {
//    connect: function(){
//
//    }
//}

exports.connect = function(url, done){
    //url es la url de conexión
    // done --> es un callback que va a ejecutar algo si todo sale bien
    if(state.db) return done(); //Si ya hay una conexión activa, hacemos algo
    MongoClient.connect(url, function(err, db){
        if(err) return done(err) //Si algo salio mal, ejecutamos algo y mostramos el error
        state.db = db; //Guardo el estado de la conexión en el state
        done(); //ejecuto algo
    });
};

exports.betterConnect = function(url, done){
    if(state.db) return done();
    MongoClient.connect(url, {
        useUnifiedTopology: true, //Evitar DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
        useNewUrlParser: true,
    })
    .then( (db) => {
        console.log('Conected to Database');
        state.db = db;
        done();
    })
    .catch( (err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });
}

exports.get = function(){ //esta funcion regresa la conexión de la bd
    return state.db;
}

exports.close = function(done){
    if (state.db) { // Si hay una conexión hay que terminarla
        state.db.close(function(err,result){
            state.db = null; //al terminar la conexión borro el estado que tenia antes
            done(err); //ejecuto algo si quiero terminar la conexión
        })
    }
}