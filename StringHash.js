// CLASS: Hashtable
//
// Author: Jaspreet Singh, student number: 7846401
//
// REMARKS: The programe implements a hashtable data structure using an Array and Linkedlis
//
//-----------------------------------------

'use strict'
let Hashable = require('./Hashable.js');

class StringHash extends Hashable {
    constructor(key) {
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
    hashVal() {

            let n = this.key.length;
            let hash = 0;
            for (let i = 0; i < n; i++) {
                hash += (this.key.charCodeAt([i])) * Math.pow(13, n - 1 - i);

            }

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
    equals(x) {
        return ((this.key).localeCompare(x) === 0);
    }
}


module.exports = StringHash;