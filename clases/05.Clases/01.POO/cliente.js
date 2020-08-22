class Cliente {
    constructor(name,rfc,saldo){
        this.name = name;
        this.rfc = rfc;
        this.saldo = saldo;
    }

    comprar(productos){
        var total = 0;
        for (let index = 0; index < productos.length; index++) {
            total += productos[i].price;
            //total = total + productos[i].price;
        }
        if (total <= this.saldo) {
            for(var index=)
        }
    }
}

class Producto {
    constructor(name,price,quantity,sku){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.sku = sku;
    }
}

var cliente = new Cliente("Edwin Salgado", "SAFL930610", 1000);
var play = new Producto("Playstation 5",16500,1000,"91237124793214");
