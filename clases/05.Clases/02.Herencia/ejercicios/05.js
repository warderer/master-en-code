// 5.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.

class Bebida{
    constructor(ml){
        this._ml = ml;
    }

    setMl(ml){
        this._ml = ml;
    }

    getMl(){
        return this._getMl();
    }
}

class Refresco extends Bebida {
    constructor(ml,azucar){
        super (ml);
        this._azucar = azucar;
    }

    setAzucar(azucar){
        this._azucar = azucar;
    }

    getAzucar(){
        return this._azucar;
    }
}

class Cerveza extends Bebida {
    constructor(ml,porcentajeAlcohol){
        super (ml);
        this._porcentajeAlcohol = porcentajeAlcohol;
    }

    setporcentajeAlcohol(porcentajeAlcohol){
        this._porcentajeAlcohol = porcentajeAlcohol;
    }

    getporcentajeAlcohol(){
        return this._porcentajeAlcohol;
    }
}

console.log(CocaCola = new Refresco(355,200));
console.log(Modelo = new Cerveza(600,15));