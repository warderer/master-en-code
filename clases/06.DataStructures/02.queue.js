// Los métodos que tiene un queue
// enqueue ---> encolar
// dequeue ---> sacar de la fila
// lenght ---> tamaño de la fila
// isEmpty ---> si la pila esta vacia
// front ---> el primer elemento de la fila

class Queue {

    constructor(){
        this.collection = [] // esto es una fila
    };

    enqueue(item){ // Agrega un nuevo elemento a la fila
        this.collection.push(item);
    };

    dequeue(){
        return this.collection.shift(); //siempre va a sacar el primero
    };

    length(){ //el número de elementos en mi fila
        return this.collection.length;
    };

    isEmpty(){
        return this.collection.length === 0;
    };

    front(){
        return this.collection[0]; //El primer elemento en la fila.
    };
};

const filaDeTortillas = new Queue();
filaDeTortillas.enqueue("Edwin");
filaDeTortillas.enqueue("Raúl");
filaDeTortillas.enqueue("Mali");
filaDeTortillas.enqueue("Mau");
console.log("El primero de la fila", filaDeTortillas.front());
console.log("Atendiendo al cliente...");
filaDeTortillas.dequeue();
console.log("El primero de la fila", filaDeTortillas.front());
console.log("Quedan por atender", filaDeTortillas.length());
console.log(filaDeTortillas.isEmpty());
console.log("Atendiendo al cliente");
filaDeTortillas.dequeue();
console.log("El primero de la fila", filaDeTortillas.front());

class Song {

    constructor(title, duration){
        this.title = title;
        this.duration = duration;
    };

    play(){
        return `Now playing: ${this.title}`;
    };

};

const myPlaylist = new Queue(); //Esto es la playlist
const song1 = new Song("El triste","2:30");
const song2 = new Song("La Chona","3:30");
const song3 = new Song("Las 4 estaciones","5:23");

myPlaylist.enqueue(song1);
myPlaylist.enqueue(song2);
myPlaylist.enqueue(song3);

setInterval(function(){ //va a ejecutar esto cada 3 segundos
    if(!myPlaylist.isEmpty())
        console.log(myPlaylist.dequeue().play());
    else {
        console.log("Se acabo la fiesta");
        clearTimeout(this);
    }
},3000);
