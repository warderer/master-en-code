// 1. Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo

// ¿Esta es la nomenclatura para generar RFC?
// La estructura se constituye de 4 letras, seguido de 6 números y finaliza con 3 caracteres desconocidos, para dar un total de 13 caracteres.
// la primera letra del apellido paterno,
// la primera vocal del apellido paterno,
// la primera letra del apellido materno y
// la primera letra del nombre
// fecha de nacimiento
// 2 últimos dígitos del año,
// 2 dígitos del mes a dos dígitos y
// 2 dígitos del día de nacimiento
// finaliza con 3 caracteres mejor conocidos como homoclave la cual es alfanumérica (asignada por el SAT)
// Ejemplo: Alejandro Rivera Carmona nació el 25 de septiembre de 1980, hacienda le asigno la homoclave: PL7; entonces su RFC es: RICA-800925-PL7

class Persona {
    constructor(nombre,apellidoPaterno,apellidoMaterno,fNacimiento,sexo,peso,altura){
        this._nombre = nombre;
        this._apellidoPaterno = apellidoPaterno;
        this._apellidoMaterno = apellidoMaterno;
        this._fnacimiento = new Date(Date.parse(fNacimiento));
        this._edad = this._calcularEdad(fNacimiento);
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._rfc = this._generarRFC();
    }

    get rfc() { //getter
        return this._rfc;
    }

    get edad(){
        return this._edad;
    }

    get imc(){
        return (this._nombre + " " + this._apellidoPaterno + " tiene un IMC de " + (this._peso / (this._altura * this._altura)).toFixed(2)+"%");
    }

    _calcularEdad(fNacimiento) { 
        fNacimiento = this._fnacimiento;
        // diff_ms = tiempo presente (en ms) - fecha de nacimiento (en ms)
        // diff_ms = edad en ms
        var diff_ms = Date.now() - fNacimiento.getTime();
        
        //new Date(diff_ms); -> Genera el valor en ms desde 1970
        var age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970); //Math.abs absoluto
    }

    esMayorDeEdad(){
        return this._edad >= 18; 
    }

    _generarRFC(){
        var primeraLetra = this._apellidoPaterno[0]; //Primera Letra del Apellido Paterno
        // Segunda Letra: la primera vocal del apellido paterno,
        var segundaLetra = this._primeraVocal(this._apellidoPaterno);
        // Tercera Letra:la primera letra del apellido materno
        var terceraLetra = this._apellidoMaterno[0];
        // Cuarta Letra: la primera letra del nombre
        var cuartaLetra = this._nombre[0];
        // Fecha de Nacimiento: 2 últimos dígitos del año
        var anio = this._fnacimiento.getFullYear();
        // Fecha de Nacimiento: 2 dígitos del mes a dos dígitos y
        var mes =  ("0" + (this._fnacimiento.getUTCMonth()+1)).slice(-2); //UTCMonth es un arreglo de 0 a 11, por lo que se debe sumar 1
        // Fecha de Nacimiento: 2 dígitos del día de nacimiento
        var dia = ("0" + this._fnacimiento.getUTCDate()).slice(-2); // Si se usa getDate en lugar de getUTCDate devuelve la fecha con error de 1 día, por horario de verano.
        // Simulamos la generación de homoclave del SAT.
        var homoclave = this._generaDigitosAleatorios(3);

        var RFC = (primeraLetra+segundaLetra+terceraLetra+cuartaLetra+anio+mes+dia+homoclave).toUpperCase();
        return RFC;
    }

    //Encuentra y devuelve la primera vocal de una cadena de texto
    _primeraVocal(texto) {
        const vocales = ['a','e','i','o','u','A','E','I','O','U'];
        for (let index = 0; index < texto.length; index++) {
            if (vocales.includes(texto[index])){
                return texto[index];
            }
        }
        const expresion = 
    }

    _generaDigitosAleatorios(cantidad){
        const letras = ['a','b','c','d','e','f','d','e','f','g','h','i','j','k','m','n','o','p','q','r','s','t','u','v','z'];
        var resultado = "";
        for (let index = 0; index < cantidad; index++) {
            var roll = Math.floor((Math.random() * 10) + 1); //Para decidir si sera número o letra
            if (roll < 5) {
                resultado = resultado + letras[Math.floor((Math.random() * letras.length))]; //traemos una letra
            } else {
                resultado = resultado + Math.floor((Math.random() * 10)); //numero aleatorio del 0 al 9
            }
        }
        return resultado;
    }
}

pedro = new Persona("Pedro","Gomez","Suarez","1994-12-09","H",100,1.8);
console.log("Pedro tiene: " + pedro.edad + " años");
console.log(pedro.imc);
console.log("¿Pedro es mayor de edad?",pedro.esMayorDeEdad());
console.log("RFC:",pedro.rfc);
console.log("----------")
susana = new Persona("Susana","Distancia","Salva","2004-04-19","M",70,1.67);
console.log("Susana tiene: " + susana.edad + " años");
console.log(susana.imc);
console.log("¿Susana es mayor de edad?",susana.esMayorDeEdad());
console.log("RFC:",susana.rfc);