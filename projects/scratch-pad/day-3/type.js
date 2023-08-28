// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //rule out non objects by forcing them to false in order to get pure object
    //array
    if(Array.isArray(value)){
        //log false
        return false;
        //null
    }else if(value === null){
        //log false
        return false;
        //not a date
    }else if(value instanceof Date){
        //log false
        return false;
        //all primitives
    } else if(typeof value !== 'object'){
        //log false
        return false;
        //else it has to be a collection
    }else{
        //only thing left is pure object
        return true
    }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
        //rule out non objects by forcing them to false in order to get pure object
    //array
    if(Array.isArray(value)){
        //log false
        return true; //same as last one, but changing to accept array
        //null
    }else if(value === null){
        //log false
        return false;
        //not a date
    }else if(value instanceof Date){
        //log false
        return false;
        //all primitives
    } else if(typeof value !== 'object'){
        //log false
        return false;
        //else it has to be a collection
    }else{
        //only thing left is pure object
        return true
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
   //eliminate the 'objects'
   //check if value is an array
   if(Array.isArray(value)){
    //log as 'array' says undefined instead...
        return 'array';
        //check if value is null
   }else if(value === null){
    //log null instead of object
        return 'null';
        //check if instance of date
   }else if(value instanceof Date){
    //log string of date
        return 'date';
   }else if(typeof value === 'object' && typeof value !== null){
        return 'object'
            //check for the simple types
   }else if(typeof value !== 'object'){
        //log the non-object datatypes
        return typeof value;
   }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
