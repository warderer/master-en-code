class Padawan {

    //Scope ---> Es donde viven las variables
    //this ---> vive en mi objeto
    //this.name ="Héctor";
    //this.age = 25;
    //this.number_lectures = 160

    // Se encarga de construir los objetos con sus caracteristicas
    constructor (name,age,number_lectures){
        this.name = name; //Estos son los atributos de mi objeto
        this.age = age;
        this.number_lectures = number_lectures;
    }

    // Métodos ---> Todas las cosas que puede hacer mi objeto.
    code(){
        console.log("I'm coding");
    }

    sleep(){
        console.log("I'm sleeping");
    }

    eat(food){
        console.log("I'm eating " + food);
    }

    greeting(){
        console.log("Hi, I'm " + this.name);
    }
}

var padawan1 = new Padawan("Héctor Mercado",25, 160);
console.log("Padawan 1", padawan1);
var padawan2 = new Padawan("José Fabio",18,150);
console.log("Padawan 2", padawan2);

console.log(padawan1 === padawan2);

padawan1.greeting();
padawan2.greeting();

padawan1.code();

padawan2.sleep();
padawan1.eat("🍕");


// PRACTICA
// Crear una clase pokemon que tenga estas caracteristicas
// Nombre, tipo, ataques,
// Hace dos cosas, dice su nombre y ataca
// Crear dos pokemon

class Pokemon {
    constructor(name,type,attack){
        this.name = name;
        this.type = type;
        this.attacks = attack;
    }

    sayName(){
        console.log("Hi, i'm " + this.name + " a pokémon type " + this.type);
    }

    attack(){
        console.log(this.name + " attacks with " + this.attacks);
    }

}

console.log(charizard = new Pokemon("Charizard","Fire","Fire Bolt"));
charizard.sayName();
charizard.attack();

console.log(squirtle = new Pokemon("Squirtle","Water","Water Blast"));
squirtle.sayName();
squirtle.attack();