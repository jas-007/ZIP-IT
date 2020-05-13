// CLASS: Dictionary
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: The programe implements a Dictionary using hashtable
     //
     //-----------------------------------------


'use strict'

 let HashTable = require('./HashTable.js');
 let KeyValueHash = require('./KeyValueHash.js');


class Dictionary {
    #dict;

 constructor()
 {
     this.#dict = new HashTable(1000);
 }
//constructor to get dict
 get dict()
 {
     return this.#dict;
 }
//------------------------------------------------------
     // put()
     //
     // PURPOSE:    This method adds a key value pair to dict if key is not present. if present it
     //             modifies value associated with that key.
     // PARAMETERS:
     //@param k:The Key to be added
     //       v: the value associated with the key
     // Returns: Nothing
     //------------------------------------------------------
 put(k,v)
 {  
     let obj;
     let tmp = new KeyValueHash(k,v);
     let idx = this.dict.getIndex(tmp);
    if(this.dict.contains(tmp))
    {
        obj = this.dict[idx].search(tmp);
        obj.value = v;
    }
    else
    {
        this.dict.add(tmp);
    }
 }
//------------------------------------------------------
     // get()
     //
     // PURPOSE:    Its a method to get the value associated with the passed key
     // PARAMETERS:
     //@param k   :The key for which value needs to be extracted
     //     
     // Returns: The value corresponding to k
     //------------------------------------------------------
 get(k)
 {
     if(this.contain(k))
     {
        return this.dict.get(new KeyValueHash(k)).value;
     }
     else
     {
         throw new Error(" The key "+ k+ " is not in the dictionary")
     }
 }
//------------------------------------------------------
     // contain()
     //
     // PURPOSE:    Checks if a key is present in dict
     // PARAMETERS:
     // @param k:   the key to be checked  
     // Returns:    boolean stating whether the key exist in dictionary or not
     //------------------------------------------------------
 contain(k)
 {
    return this.dict.contains(new KeyValueHash(k));
 }
 //------------------------------------------------------
     // isEmpty()
     //
     // PURPOSE:     Checks if the Dictionary is empty or not
     // PARAMETERS:     Nothing 
     // Returns:     Boolean stating whether the dictionary was empty or not
     //------------------------------------------------------      
 isEmpty()
 {
     return this.dict.isEmpty();
 }
}

module.exports = Dictionary;