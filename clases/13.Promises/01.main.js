// PROMESAS (PROMISES)
// Las promesas son para operaciones asincronas.

    // Recibe como parametro un Callback
    // El callback recibe como parametro "resolve" & "reject"
    // - resolve --> se cumple el objetivo de la promesa
    // - reject --> NO se cumple el objetivo de las promesas
    // Las promesas se declaran con new Promise(resolve, reject)

// DEFINICIÓN DE UNA FUNCIÓN QUE RETORNA UNA PROMESA
// La función siempre debe retornar una promesa
function miPrimeraPromesaEsMayorQueUno(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num > 1){
                //A Resolve se le puede pasar el parametro que quieras.
                resolve('Se resolvio exitosamente la promesa');
            } else {
                //A Reject se le puede pasar el parametro que quieras.
                reject('Error');
            }
        }, 2000);
    });
};


// LA EJECUCIÓN DE UNA FUNCIÓN QUE DEVUELVE UNA PROMESA
// Las promesas pueden tener 3 estados (siempre van a pasar por 2 estados)
// Comienzan con PENDIENTE (pending) y cambia a RESUELTO (resolve) o RECHAZADO (reject)
// Cuando se ejecuta RESOLVE se cumple THEN
// Cuando se ejecuta REJECT se cumple CATCH

// miPrimeraPromesaEsMayorQueUno(1); // Esto tira un error, ya que se deben "cachar las promesas"

miPrimeraPromesaEsMayorQueUno(1)
    .then((palabra) => {
        // palabra: Es el parametro que se le pasa a resolve.
        console.log('THEN',palabra);
    }).catch((error) => {
        // error: 
        console.log('CATCH',error);
    });
//CATCH

    miPrimeraPromesaEsMayorQueUno(5)
    .then((palabra) => {
        console.log('THEN',palabra);
    }).catch((error) => {
        console.log('CATCH', error);
    });
//THEN

