"use strict"
// CLASS: Node
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS:  Implements a Node class
     //
     //-----------------------------------------
class Node{
#data;
#next;

    constructor(data,next)
    {
        this.#data = data;
        this.#next = next;
    }


    get data(){
        return this.#data;
    }

    get next(){
        return this.#next;
    }

    set data(data){
        this.#data = data;
    }

    set next(next){
        this.#next = next;
    }
}

module.exports = Node;
