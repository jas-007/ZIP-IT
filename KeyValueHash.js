// CLASS: keyvaluehash
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: The programe implements subclass to store key value pair and perform ops
     //-----------------------------------------

'use strict'

 let intHash = require('./IntHash.js')
 let StringHash = require('./StringHash.js')
 let Hashable  = require('./Hashable.js');


class KeyValueHash extends Hashable
{
    #value;
    constructor(key,value)
    {
        super(key);
        this.#value = value;
    }

get value()
{
    return this.#value;
}

set Value(v)
{
this.#value = v;
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
    let tmp=null;
    let hash = 0;
 if(Number.isInteger(super.key)) // if key is intHash type
 {
    tmp= new intHash(super.key);
    hash = tmp.hashVal();
 }
 else if(typeof super.key === 'string')
 {
       tmp = new StringHash(super.key); //if Key is StringHash type
       hash = tmp.hashVal();
 }
 else(((super.key).key).hashVal());        // if key is keyValueHash type

 return hash;
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
module.exports = KeyValueHash;
