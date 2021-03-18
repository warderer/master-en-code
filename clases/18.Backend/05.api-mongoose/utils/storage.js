//require('dotenv').config();
const { Storage } = require('@google-cloud/storage');

const storage = new Storage ({
    projectId: process.env.FB_PROJECT_ID, //mi Id de Proyecto de Firebase
    keyFilename: process.env.FB_KEYFILENAME //Mi llave generada de google cloud platform
})

const bucket = storage.bucket(process.env.FB_BUCKET_URL);

module.exports = (file) => {
    return new Promise((resolve,reject) => {
        if(!file) reject ("No hay ningún archivo");
        const newFileName = `${file.originalname}_${Date.now()}`; // renombrar el archivo para que no haya 2 con el mismo nombre
        console.log(newFileName);
        const fileUpload = bucket.file(newFileName); // Voy a crear un nuevo archivo

        const valid_mimetypes = ['image/jpeg', 'image/png'];
        if (valid_mimetypes.indexOf(file.mimetype) === -1 ) {
            reject('Es necesario enviar un tipo de archivo válido')
        };

        const blobStream = fileUpload.createWriteStream({ //Buffer: stream de datos en bytes que voy a mandar en pedacitos
            metadata: {
                contentType: file.mimetype //que tipo de archivo te voy a mandar
            }
        });

        //eventos
        blobStream.on('error', (error) => { 
            reject(error)
        }); //Si pasa un error la promesa debe regresar error

        blobStream.on('finish',() => {
            const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${fileUpload.name}?alt=media`;
            resolve(url); //retornar la URL donde fue almacenada la imagen
        });

        blobStream.end(file.buffer); //Aqui empiezo la transmisión de datos del backend al bucket.
    })
}

// Referencia: https://googleapis.dev/nodejs/storage/latest/File.html#createWriteStream