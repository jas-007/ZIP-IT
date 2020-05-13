// CLASS: Linkedlist
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: Implements a data structure for linkedlist
     //-----------------------------------------

'use strict';

 let Node = require('./Node.js');

class Linkedlist
{
    #head;
    constructor()
    {
        this.#head=null;
    }

    get head()
    {
        return this.#head;
    }
    set head(val)
    {
        this.#head = val;
    }
 //------------------------------------------------------
     // addTofront()
     //
     // PURPOSE:     adds data to the list
     // PARAMETERS:     data to be added
     // Returns:    Nothing
     //------------------------------------------------------      
    addToFront(data)
    {
        let newNode;
        if(this.#head===null)
        {
         newNode = new Node(data,null);
        this.#head = newNode;
    }
    else
    {
         newNode = new Node(data,this.#head);
        this.#head = newNode;
    }

    }
 //------------------------------------------------------
     // search()
     //
     // PURPOSE:     find the given object 
     // PARAMETERS:    The object to be searched
     // Returns:     Return the object found
     //------------------------------------------------------          
search(x)
{
    let found =null;
    let curr = this.head;
    while(curr!==null && !curr.data.equals(x))
    {
        curr = curr.next;

    }
    if(curr!==null)
    {
        if(curr.data.equals(x))
        {
            found = curr;;

        }
    }
    
return found.data;
}

 //------------------------------------------------------
     // remove()
     //
     // PURPOSE:    removes the given object from list
     // PARAMETERS:     The object to be removed
     // Returns:     Boolean stating whether the object was removed or not
     //------------------------------------------------------      
remove(x)
{
            let removed = false;
            let curr = this.head;
            let prev = null;

                while(curr!==null && !curr.data.equals(x)) 
            
                {
                    prev = curr;
                    curr = curr.next;
                }
            
                if(prev!==null && curr!==null)
                {
                    prev.next= curr.next;
                    removed = true;

                }
                else
                {
                    this.head = this.head.next;
                    removed = true;
                }            
        
    
        return removed;
}     
//------------------------------------------------------
     // contains()
     //
     // PURPOSE:    Checks if a object is present in list
     // PARAMETERS:
     // @param k:   the object to be checked  
     // Returns:    boolean stating whether the key exist in list or not
     //------------------------------------------------------
contains(x)
{
    let isPresent = false;
    let curr = this.head;
    
    while(curr!==null && !curr.data.equals(x))
        {
            curr = curr.next;
        }

    if(curr!==null&& curr.data.equals(x))
        {
        isPresent= true;
        }

    
return isPresent;
}

 //------------------------------------------------------
     // isEmpty()
     //
     // PURPOSE:     Checks if the list is empty or not
     // PARAMETERS:     Nothing 
     // Returns:     Boolean stating whether the list was empty or not
     //------------------------------------------------------      
isEmpty()
{
    
    return this.head===null;
}

}

module.exports = Linkedlist;