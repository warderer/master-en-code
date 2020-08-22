//Ejercicio Gráfos 01
//Representación de Matriz de Adyacencia
const graph1 = [
    [0,1,1,0,0], // posición 0
    [0,0,1,0,1], // posición 1
    [0,0,0,1,0], // posición 2
    [0,0,0,0,1], // posición 3
    [0,0,0,0,0]  // posición 4
]; //Arreglo de dos dimensiones bidimensionales o de dos dimensiones.

console.log(graph1[2]); // Me muestra la relación solo del nodo 2


//Ejercicio Grafos 02
const graph2 = [
//   0 1 2 3 4
    [0,1,1,1,0], // posición 0
    [0,0,1,0,0], // posición 1
    [0,1,0,0,0], // posición 2
    [0,0,0,0,0], // posición 3
    [0,1,0,0,0]  // posición 4
]; //Arreglo de dos dimensiones bidimensionales o de dos dimensiones.

class Node {
    constructor (value){
        this.value= value;
    };
}

class Graph{
    constructor(){
        this.nodes = [];
        this.edges = [];
    };

    addNode(value){ //Agregamos un nodo a nuestro grafo
        const node = new Node(value); //Creamos un nuevo nodo
        this.nodes.push(node); // Lo agregamos a la lista de nodos
    };

    getNode(value){ //Buscar un nodo en especifico.
        var nodo;
        if(this.nodes.length == 0) return null; //no hay nodos
        for (var i = 0; i < this.nodes.length; i++) {
            if(this.nodes[i].value === value){ //Si encuentro el nodo.
                nodo = this.nodes[i]; // Este es el nodo que estoy buscando
            }
        };
        return nodo; //Aqui regreso el nodo que encontre
    };

    addEdge(value1, value2){ //Valor del nodo 1 y nodo 2 que son interconectados por el Edge.
        const nodo1 = this.getNode(value1); //busco el primer nodo
        const nodo2 = this.getNode(value2); //busco el segundo nodo
        const edge = [nodo1, nodo2];
        //el nodo1 va hacia el nodo2
        this.edges.push(edge);
    };

    print(){
        for (let i = 0; i < this.nodes.length; i++) {
            console.log( `${this.edges[i][0].value} ----> ${this.edges[i][1].value}` );
        }
    }
};

const mygrafo = new Graph();

//agregando nodos
mygrafo.addNode(0);
mygrafo.addNode(1);
mygrafo.addNode(2);
mygrafo.addNode(3);
mygrafo.addNode(4);

//agregando edges --- relaciones
mygrafo.addEdge(0,1);
mygrafo.addEdge(0,2);
mygrafo.addEdge(1,4);
mygrafo.addEdge(1,2);
mygrafo.addEdge(2,3);
mygrafo.addEdge(3,4);

mygrafo.print();


