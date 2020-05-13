// CLASS: Hashtable
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: The programe implements a hashtable data structure using an Array and Linkedlis
     //
     //-----------------------------------------


"use strict"

//IMPORT STATMENTS------------------------------

 let Linkedlist = require('./Linkedlist.js');
 let KeyValueHash = require('./KeyValueHash.js')
 let Hashable  = require('./Hashable.js');




class HashTable
{
    #hashTable;
    constructor(size)
    {
         this.#hashTable = new Array(size);
         let index
        
        for(index = 0;index < size; index++)             //Iterating every index in Array
        {
           this.#hashTable[index] = new Linkedlist(); // Extedning the indeces with a linkedlIst
        }
        
        
    }

    //Constrcutor to get hashtable

    get hashTable()
    {
        return this.#hashTable;
    }

//------------------------------------------------------
     // getIndex()
     //
     // PURPOSE:    Its a helper method to get the index in hashtable 
     //             where an object will be hashed
     // PARAMETERS:
     //@param x:The hashable object which is to be hashed in hashtable.
     //     
     // Returns: The index where object will be hashed
     //------------------------------------------------------

     getIndex(x)
     {
        let hashCode;
         if(x.key instanceof KeyValueHash)        
         {  
            hashCode = x.key.hashVal();
         }
         else{
             hashCode = x.hashVal(); 
        } 
         let index  = hashCode % (this.hashTable.length);  
         return index;

    }   
 //------------------------------------------------------
     // add()
     //
     // PURPOSE:    To add the object into hashtable
     // PARAMETERS:
     //  @param x: The hashable object tp be added 
     //     Returns: Nothing
     //------------------------------------------------------   

     add(x) 
     
     {
        let idx = this.getIndex(x); 

         if(x instanceof Hashable)
         {
             if(this.hashTable[idx])
             {
                this.hashTable[idx].addToFront(x);
         }
        }
       
    }
 //------------------------------------------------------
     // get()
     //
     // PURPOSE:    Gets the object equal to the first occurance of passed object
     // PARAMETERS:
     // @param x:   The hashable object to be extracted
     // Returns:    The first occurance of passed object
     //------------------------------------------------------  
    get(x)
    {
        let idx = this.getIndex(x);
        let objFound = null;
        if(x instanceof Hashable){
            if(this.hashTable[idx])             
            {
              objFound = this.hashTable[idx].search(x);
            }
        
    
      return objFound;
}
    }
 //------------------------------------------------------
     // remove()
     //
     // PURPOSE:     To remove a particular object from hashtable
     // PARAMETERS:
     // @param x:    The hashable object to be removed 
     // Returns:     Boolean stating whether the object was removed or not
     //------------------------------------------------------  

    remove(x)
    {    
        let removed= false;
        if(x instanceof Hashable)
        {
            let idx =  this.getIndex(x);
            this.hashTable[idx].remove(x);
            removed = true;
             }
    return removed;

    }
 //------------------------------------------------------
     // contains()
     //
     // PURPOSE:     To check if the hashtable contains a particluar object
     // PARAMETERS:
     // @param x:    The hashable object to be checked
     // Returns:     Boolean stating whether the object was found or not
     //------------------------------------------------------  
    contains(x)
    {
        let found = false;
        let idx = this.getIndex(x);
        if(this.hashTable[idx])
        {
            found=this.hashTable[idx].contains(x);
        }
        return found;

    }

 //------------------------------------------------------
     // isEmpty()
     //
     // PURPOSE:     Checks if the hashtable is empty or not
     // PARAMETERS:     Nothing 
     // Returns:     Boolean stating whether the hashtable was empty or not
     //------------------------------------------------------      
    isEmpty()
    {
    let tmp = true;
            for(let i = 0; i< this.hashTable.length; i++)
            {
                   if (this.hashTable[i].isEmpty()!==true)
                   {
                        tmp=false;     
                   }
                
            }
            return tmp;
    }

}

module.exports= HashTable;
