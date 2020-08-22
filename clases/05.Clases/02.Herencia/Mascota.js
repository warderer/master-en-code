class Mascota {
    constructor(nombre,edad,color,raza){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.raza = raza;
    }

    comer(comida) {
        return `La mascota ${this.nombre} esta comiendo ${comida}`; //interpolación ``
    }
}

module.exports = Mascota; //Esto significa que hago publica mi clase para otros archivos. Solo funciona en Node no en Chrome.