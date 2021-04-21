// Cargar los datos con este Script

// 1.- Abrir el archivo.
// 2.- Leer cada row del archivo.
// 3.- Procesar / Limpiar
// 4.- Insertar en la base de datos
// ----------------------------------


// 1.- Abrir el archivo.
const csv = require('csv-parser');
const fs = require('fs');

const results = [];

fs.createReadStream('e.csv') // Lee un archivo y lo convierte en una linea de datos que se pueda leer
    .pipe(csv()) // Pipe transforma datos de un stream a Algo. (Ese algo yo lo puedo crear)
    // 2.- Leer cada row del archivo
    .on('data', (data) => {
        // 3.- Procesar / Limpiar los datos.
        // Crear el objeto para mongo
        const sessionClient = {
            device_mac: data.device_mac,
            branch_office: parseInt(data.branch_office),
            month_tz: parseInt(data.month_tz),
            day_tz: parseInt(data.day_tz),
            day_of_week_tz: data.day_of_week_tz,
            hour_tz: parseInt(data.hour_tz),
            connection_date: new Date(`2016-${data.month_tz}-${data.day_tz}T${data.hour_tz}:00:00Z`),
            visitor: data.visitor === 'true',
            tiempodeses: data.tiempodeses
        };
        results.push(sessionClient)
    }) // Escuchadores de los eventos que detona el pipe y que su vez detona csv(), data = row del csv
    .on('end', () => {
        console.log(results);
    })