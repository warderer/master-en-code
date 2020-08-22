(() => {
    const myPila = [] //Esto ya es una pila

    //Voy a pilar libros

    myPila.push("El Quijote de la Mancha");
    myPila.push("El Principito")
    console.log("MyPila", myPila);

    myPila.pop();
    console.log("myPila", myPila); //Quitamos el último.

    // Comprobar si es un palindromo
    const word = "arriba la birra"; //Palabra a comprobar
    var revert_word = ""; 
    const letters = [] //mi pila de letras;

    word[0]; //a
    word[6]; //espacio

    //generamos la pila de letras
    for (let index = 0; index < word.length; index++) {
        if(word[index] != " "){
            letters.push(word[index]);
        }
    }
    console.log("Letters:",letters);

    for (let index = 0; index < word.length; index++) {
        if(word[index] != " "){
            revert_word = revert_word + letters.pop(); //esta concatenando letras
        }
    }
    console.log("revert_word", revert_word);
    console.log("word",word);

    if(word.replace(/\s+/g, '') == revert_word){
        console.log(`${word} es un palindromo`);
    } else {
        console.log(`${word} no es un palindromo`);
    }

class Stack {
    //va a tener dos métodos: push y pop
    //peek ---> Me dice el último elemento de la pila
    //length ---> me dice el tamaño de la pila
    constructor(){
        this.count = 0; // Aqui voy a guardar cuantos elementos tengo en la pila
        this.storage = {}; // Aqui voy a guardar los elementos de mi pila
    }

    push(nuevoElemento) { //Mete cosas nuevas a mi pila
        //{0:"x",1:"y",2:"<"}
        this.storage[this.count] = nuevoElemento;
        this.count++;
    }

    pop() {
        if (this.count == 0){
            return null;
        } // checha si la pila esta vacia

        this.count--; //quito uno a count
        var result = this.storage[this.count]; //va a guardar el ultimo elemento en mi pila
        delete this.storage[this.count]; // se borra el ultimo elemento
        return result; //regreso el ultimo elemento.
    }

    length(){
        return this.count;
    }

    //Regresa el último valor en la pila, mas no lo elimina.
    peek(){
        return this.storage[this.count - 1];
    }
}

const myNuevaPila = new Stack();

myNuevaPila.push(2);
myNuevaPila.push(3);
myNuevaPila.push(7);
console.log(myNuevaPila);
console.log("Último elemento", myNuevaPila.peek());
console.log("Remuevo último elemento POP:",myNuevaPila.pop());
console.log(myNuevaPila);
console.log("Agrego nuevo elemento PUSH: 9",myNuevaPila.push(9));
console.log(myNuevaPila);

})();