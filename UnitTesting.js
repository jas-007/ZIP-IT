// CLASS: UnitTesting
//
// Author: Jaspreet Singh, student number: 7846401
//
// REMARKS: This includes test cases for the hashtable implementation
//
//-----------------------------------------

'use strict'

let assert = require('assert');
let HashTable = require('./HashTable.js')
let intHash = require('./IntHash.js');


// mehtod to test function add(x)
function testAdd() {
    let table = new HashTable(4);

    table.add(new intHash(3));
    let num = new intHash(3);

    assert(table.get(num).key === 3) {
        console.log("Test Passed : add(x) works fine");
    }
}


// mehtod to test function get(x)
function testGet() {
    let table = new HashTable(4);

    table.add(new intHash(1));
    let num = new intHash(1);

    assert(table.get(num).key === 1) {
        console.log("Test Passed : get(x) works fine");
    }

}

// mehtod to test function remove(x)
function testRemove() {
    let table = new HashTable(4);
    let num = new intHash(1);

    table.add(num);
    table.remove(new intHash(1));
    assert(table.contains(num) === false) {
        console.log("Test Passed : remove(x) works fine with edge Case");
    }

}
// mehtod to test function isEmpty(x)
function testIsEmpty() {
    let table = new HashTable(4);
    assert(table.isEmpty() === true); {
        console.log("Test Passed : isEmpty() works fine with edge Case")
    }
}
// mehtod to test function contains(x)
function testContains() {
    let table = new HashTable(4);
    table.add(new intHash(3));
    table.add(new intHash(7));
    table.add(new intHash(4));


    let num = new intHash(7);
    assert(table.contains(num) === true) {
        console.log("Test Passed : contains(c) works fine")

    }



}


module.exports.testAdd = testAdd;
module.exports.testGet = testGet;
module.exports.testRemove = testRemove;
module.exports.testIsEmpty = testIsEmpty;
module.exports.testContains = testContains;