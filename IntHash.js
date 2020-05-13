// CLASS: Hashtable
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: The programe implements a hashtable data structure using an Array and Linkedlis
     //
     //-----------------------------------------

"use strict"
let Hashable  = require('./Hashable.js');

class intHash extends Hashable
{

    constructor(key)
    {
            super(key);
    }

//------------------------------------------------------
     // hashVal
     //
     // PURPOSE:    Find the hashVal of object 
     // PARAMETERS:
     // @param x:   nothing
     //     
     // Returns: The hashVal
     //------------------------------------------------------  
hashVal()
{
    return super.key;

}
//------------------------------------------------------
     // equal()
     //
     // PURPOSE:    Check if two object are equal
     // PARAMETERS: 
     // @param x:  The object to be compaired
     //     
     // Returns: Boolean whether the objects were equal
     //------------------------------------------------------
equals(x)
{
    return super.key===x.key;

}

}
module.exports = intHash;

