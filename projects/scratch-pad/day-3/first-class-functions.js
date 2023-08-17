// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

//test => checking for true or false

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        if(value > base){
            return true;
        }else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value){
        if(value < base){
            return true;
        }else{
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
        //check if peram letter matches the strings first.
        //account for caps
        if(startsWith.toUpperCase() === string.charAt(0).toUpperCase()){
            return true
        } else{
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
        //check if peram letter matches the strings first.
        //account for caps
        if(endsWith.toUpperCase() === string.charAt(string.length - 1).toUpperCase()){
            return true
        } else{
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.

//strings = [1, 2, 3, 4, 5] //for replit
//modify is the function() being used to change the strings
//functions are just like variables so forget the crazy stuff and KISS
 */           //array of strings, callback function
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //create storage
    let arr = [];
     //loop through passed in array
        for(let i = 0; i < strings.length; i++){
            //push elements into storage
            arr.push(modify(strings[i]));
        }
        return arr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //loop over array of strings
    //for(let i = 0; i < strings.length; i++){
        //strings[i] is each string within the array
            //test the strings 
          let str = strings.every((ele) => test(ele))
        if(str === true){
            return true
        }else{
            return false
        }
          

            //}
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
