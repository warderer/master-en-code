const greeting = (name) => {
    return `Hola ${name}, saludos desde JS`;
};

export default greeting; //hago accesible mi función greeting para otros archivos de JS
// module.exports es similar a export default
// La diferencia es que module.exports esta escrito en JS Vanilla
// y export default esta para Babel y ECMAScript 6