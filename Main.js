 //-----------------------------------------
 // NAME		: JASPREET SINGH
 // STUDENT NUMBER	: 7846401
 // 
 // REMARKS: The Program implements a generic Dictionary using a hashtable to compress the given txt file
 //
 //
 //-----------------------------------------


 'use strict'

 let UnitTesting = require('./UnitTesting.js');
 let Compresssion = require('./Compression.js')
     //-------------------------------------------------------
     //calling all the test method from Unittesting.js

 UnitTesting.testAdd();
 UnitTesting.testGet();
 UnitTesting.testRemove();
 UnitTesting.testIsEmpty();
 UnitTesting.testContains();

 //running compression algorithm
 let file = new Compresssion(process.argv[0]);

 file.encode();