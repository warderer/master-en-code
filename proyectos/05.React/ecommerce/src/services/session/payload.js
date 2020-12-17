/* eslint-disable no-unused-vars */
/* Payload convierte la información de BASE64 almacenada en un objeto JSON que podemos leer */
export default function() {
    const token = window.localStorage.getItem('token');
    if(token){
        const [header, payload, signature] = token.split('.');
        const base64 = payload.replace('-','+').replace('_','/'); //blindamos el payload por que en ocasiones un payload en base 64 reemplaza caracteres que nos pueden dar problemas
        //atob convierte base64 a String, y ese texto el resutaldo se convierte a objeto en formato JSON (json parse)
        const payloadObject = JSON.parse(window.atob(base64));
        return payloadObject;
    } else {
        return null;
    }
}