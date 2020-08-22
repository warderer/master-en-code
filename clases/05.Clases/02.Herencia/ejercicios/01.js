// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antiguedad" que guarda un valor numerico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
//    Equipo: Alberto Flores
class Maestro {
    constructor(materia,calificaciones){
        this._materia = materia;
        this._calificaciones = calificaciones; //TODO: Ajustar promedio
    }

    getPromedio() {
        return this._calcularPromedio(this._calificaciones);
    }

    _calcularPromedio(calificaciones){
        let suma = 0;
        for (let index = 0; index < calificaciones.length; index++) {
            suma += calificaciones[index];
        }
        return (suma / calificaciones.length);
    }
}

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super (materia,calificaciones);
        this._antiguedad = antiguedad;
    }

    getAntiguedad() {
        return this._antiguedad;
    }
}

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad){
        super (materia,calificaciones);
        this._edad = edad;
    }

    getEdad() {
        return this._edad;
    }
}

const Pedro = new MaestroFisica("Física I", [60,30,60],20);
console.log(Pedro);
console.log(`La clase de Pedro tiene un promedio de ${Pedro.getPromedio()}`);
console.log(`Pedro tiene ${Pedro.getAntiguedad()} años de antigüedad`);
console.log("-----");

const Maria = new MaestroMusica("Guitarra II", [90,80,100,90],35);
console.log(Maria);
console.log(`La clase de María tiene un promedio de ${Maria.getPromedio()}`);
console.log(`María tiene ${Maria.getEdad()} años de edad`);
console.log("-----");