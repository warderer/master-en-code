const Mascota = require('./Mascota'); //require palabra reservada de de Node

class Perro extends Mascota {
    constructor(nombre,edad,color,raza,tipo_orejas){
        super(nombre,edad,color,raza); //Va a ejecutar el constructor del padre
        this.tipo_orejas = tipo_orejas;
    }

    ladra(){
        return "Guau Guau 🐕";
    }
}

const snoopy = new Perro ("Snoopy",5,"Blanco con negro","Beagle","Orejas Caidas");
const scooby = new Perro ("Scooby Doo",10,"Cafe con negro","Gran Danes","Orejas");

console.log(snoopy);
console.log(scooby);

// class Pug extends Perro {

// }