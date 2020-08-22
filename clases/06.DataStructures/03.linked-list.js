class Node { // Este es mi nodo
    constructor(dato){
        this.dato = dato;
        this.next = null;
    };

};

class LinkedList { // Lista enlazada
    constructor(){
        this.head = null; //esto significa que no hay nada en la lista
        this.length = 0; //número de elementos dentro de la lista
    };

    add(dato){
        const node = new Node(dato); //Creando un nodo con su dato
        if (this.head === null){ //Si mi lista esta vacia...
            this.head = node; //asigno el primer nodo como cabeza de la lista
        } else { //Ejecuta esto cuando hay un elemento en la lista
            // Buscar el último elemento de la lista y asociarlo con el penúltimo elemento
            let currentNode = this.head; //siempre empiezo a buscar desde el head
            while(currentNode.next){
                //mientras haya un node sigue buscando
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        };
        this.length++;
    };

    remove(datoBorrar){
        //tengo que especificar que dato va a ser borrado
        let currentNode = this.head;
        let previousNode = null; //aqui voy a almacenar el nodo con el que tengo que reconectar
        if (currentNode.dato === datoBorrar) { //esto va a a borrar el head
            this.head = currentNode.next; //reasigna la cabeza de mi nodo
        } else {
            while(currentNode.dato !== datoBorrar){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.Next;
        };
        this.length--;
    };
};

var myList = new LinkedList;
myList.add(22);
console.log(myList);
myList.add(33);
console.log(myList);
myList.add(44);
console.log(myList);
myList.add(55);
console.log(JSON.stringify(myList)); //JSON.stringify convierte un objeto a string
myList.remove(44);
console.log("aca borre un elemento", JSON.stringify(myList));