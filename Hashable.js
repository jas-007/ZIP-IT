// CLASS: Hashable
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS:  The abstract class 
     //
     //-----------------------------------------

"use strict"


class Hashable
{

    #key;
    constructor(key)
    {
        if(this.constructor===Hashable){
        throw new Error("This is an abstact class. Please do not create any instance of it");
        }
    this.#key=key;
    }
    
    get key()
    {
        return this.#key;
    }

    hashVal()
    {
        throw new Error(" Subclass missing hashVal() ");
    }

    equals(x)
    {
        throw new Error(" Subclass missing equal(x) ")
    }
}



module.exports = Hashable;
