// CLASS: Compression
     //
     // Author: Jaspreet Singh, student number: 7846401
     //
     // REMARKS: The programe implements a Compression algorithm to perform lzw encoding.
     //
     //-----------------------------------------
'use strict'

let Dictionary = require('./Dictionary.js');
const fs = require('fs')

class Compression
{
#fileName;

constructor(fileName)
{
this.#fileName = fileName;
}

get fileName()
{
    return this.#fileName;
}
 //------------------------------------------------------
     // encode()
     //
     // PURPOSE:     To compress a file using lzw encoding
     // PARAMETERS:  Nothing 
     // Returns:     Outputs code into a .lzw file 
     //------------------------------------------------------      
encode()
{

let dict = new Dictionary();

for(let i = 32; i<127;i++)                  //iterating for ascii chars
{
 dict.put(String.fromCharCode(i),i-32);     //saving Ascii chars into dictionary
}

let contents = fs.readFileSync(this.fileName,"utf-8");      //reading file passed
let k = 94;                                 //integer to track last filled position in dict
for (let i = 0; i < contents.length-1; i++) 
{ 
    let lastKey;                 // unlike in pseudocode using a for loop to                              
    let currKey = contents[i];  //get next unseen char
    let index=i;

    while(dict.contain(currKey))
    {
     lastKey=currKey;     
     currKey+=contents[++index];       //adding to currkey

    
    }

    let tmp = currKey.split("");        //splitting to get values of each char
    let val =0;
    
    for(let t= 0; t<tmp.length; t++)
    {
        val+=dict.get(tmp[t]);              //adding anf saving values into val
    }
if(contents[index]!==null)
{
    dict.put(currKey,val);                //adding the key to dict with new value
}
fs.appendFileSync(this.fileName+".lzw",dict.get(lastKey)+" ")

}

fs.appendFileSync(this.fileName+".lzw","-1 ")


}

}

module.exports  =Compression;