// Cargar los datos con este Script

// 1.- Abrir el archivo.
// 2.- Leer cada row del archivo.
// 3.- Procesar / Limpiar
// 4.- Insertar en la base de datos
// ----------------------------------


// 2.- Abrir el archivo.
const csv = require('csv-parser');
const fs = require('fs');

const results = [];

fs.createReadStream('v.csv') // Lee un archivo y lo convierte en una linea de datos que se pueda leer
    .pipe(csv()) // Pipe transforma datos de un stream a Algo. (Ese algo yo lo puedo crear)
    .on('data', (data) => results.push(data)) // Escuchadores de los eventos que detona el pipe y que su vez detona csv(), data = row del csv
    .on('end', () => {
        console.log(results);
    });