'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param { Function } action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: takes in an input value and returns unchanged
 * 
 * @param { value } Function takes in any value.
 * @returns { value } Returns the same value unchanged
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * map: An iterative, High Order Function that loops through all elements in a collection and places
 * the results of calling the function in a new array.
 * 
 * @param { Array or Object } Collection: function takes in an array or an object 
 * @param { Function } Callback Function: iterates through every the array and adds specified elements to a new array.
 * @returns { Array } Function returns a new array with items that were specified
 */

function map(list, func){
    let array = [];
if(Array.isArray(list)){
    for(let i = 0; i < list.length; i++){
        array.push(func(list[i], i, list));
    }
}else{
    for(let key in list){
        array.push(func(list[key], key, list));
        }
    }
    return array;
}
module.exports.map = map;

/**
 * typeOf: A function that can be called with any parameter and it will return the data type of that input.
 * 
 * @param { Value } Takes in an input value
 * @returns { Function } Function returns the data type of the input
 */


 function typeOf(value) {
   if(Array.isArray(value)){
        return 'array';
   }else if(value === null){
        return 'null';
   }else if(value instanceof Date){
        return 'date';
   }else if(typeof value === 'object'){
        return 'object'
   }else if(typeof value !== 'object'){
        return typeof value;
   }
}
module.exports.typeOf = typeOf;

/**
 * first: Takes in an array and a number value. The function will test the number input against the length of the array 
 * and return the array with its contents cut at the number index and returns the front portion of that array
 * 
 * @param { Array } Takes in an array
 * @param { Number } Takes in a number to test against the Array's length
 * @returns { Array } Function returns a portion of the array from index 0 to the number parameter.
 */

function first(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined){
        return array[0];
    }else if(number < 0){
        return [];
    }else if(number > array.length){
        return array
    } else{
        return array.slice(0, number);
    }
}
module.exports.first = first;

/**
 * last: Takes in an array and a number value. The function will test the number input against the length of the
 * array and return the array with its contents cut at the number index and returns the back portion of that array
 * 
 * @param { Array } Takes in an array
 * @param { Number } Takes in a number to test against the length of the array
 * @returns { Array } Function returs an array from the number input to the end of the array
 */

function last(array, number){
    if(!Array.isArray(array)){
        return [];
    }else if(number === undefined){
        return array[array.length - 1];
    }else if(number < 0){
        return [];
    }else if(number > array.length){
        return array
    } else{
        return array.slice(1);
    }
}
module.exports.last = last;


/**
 * indexOf: Iterates through an array in search of the first occurance of an element and returns that elements index.
 * Unless it doesn't exist in the array, it will return -1.
 * 
 * @param { Array } Takes in an array of which the index is needed
 * @param { Value } Function takes a element value to be searched for.
 * @returns { Index } Function returns the index of the search item's first occurance. Returns -1 if element is not in the array
 */

function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(!array.includes(value)){
            return -1
        }else if(array[i] === value){
            return i
        }
    }
}
module.exports.indexOf = indexOf;

/**
 * contains:
 * 
 * @param {*} array 
 * @param {*} value 
 * @returns 
 */

function contains(array, value){
   return array.includes(value) ? true : false
}
module.exports.contains = contains;

/**
 * unique:
 * 
 * @param {*} array 
 * @returns 
 */

function unique(array){
    return [...new Set(array)]
}
module.exports.unique = unique;

/**
 * filter:
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
 */

function filter(array, func){
    //create array to store
    let filtered = [];
    //loop array
    for(let i = 0; i < array.length; i++){
        // is statement
    if(func(array[i], i, array)){ 
        filtered.push(array[i]);
        }
    }
    return filtered
}
module.exports.filter = filter;

/**
 * reject:
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
 */

function reject(array, func){
    let rejected = [];
    //loop array
    for(let i = 0; i < array.length; i++){
        // is statement
    if(func(array[i], i, array) === false){ 
        rejected.push(array[i]);
        }
    }
    return rejected
}
module.exports.reject = reject;

/**
 * partition:
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
 */

function partition(array, func){
    let trues = [];
    let falses = [];
    //loop array
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            trues.push(array[i]);
        }else {
            falses.push(array[i])
        }
    }

    return [[...trues], [...falses]]
}
module.exports.partition = partition;


/**
 * pluck:
 * 
 * @param {*} array 
 * @param {*} prop 
 * @returns 
 */

function pluck(array, prop){
    //create empty array
  //iterate through array first?
   let items = array.map(obj => {
    return obj[prop];
   })
   return items
    
    
}
module.exports.pluck = pluck;

/**
 * every:
 * 
 * @param {*} list 
 * @param {*} func 
 * @returns 
 */

function every(list, func){
    //determine if array
    if(Array.isArray(list)){
        //check if func is even provided
        if(func === undefined){ //edge case //so it can still iterate to find anything false
            //loop through array, then object
            for(let i = 0; i < list.length; i++){
                //check if the element does not exists
                if(!list[i]){
                    return false;
                }
            }
            //else it is provided
        }else{
            for(let i = 0; i < list.length; i++){
                //check if func invoke is false anywhere
                if(!func(list[i], i, list)){
                    //if it finds ANYTHING false
                    return false;
                }
            }
        }
        //else it's an object...
    }else{
        //check if provided
        if(func === undefined){ //edge case //so it can still iterate to find anything false
            //loop over object
            for(let key in list){
                ////check if func invoke is false anywhere
                if(!list[key]){
                    //key does not exist
                    return false;
                }
            }
            //else it is provided
        }else{
            //iterate yet again...
            for(let key in list){
                //check if key exists
                if(!list[key]){
                    //does not
                    return false;
                }
            }
        }
    }
    //otherwise
    return true //christ
}
module.exports.every = every;

/**
 * some:
 * 
 * @param {*} list 
 * @param {*} func 
 * @returns 
 */

function some(list, func){
       //determine if array
       if(Array.isArray(list)){
        //check if func is even provided
        if(func === undefined){ //edge case //so it can still iterate to find anything false
            //loop through array, then object
            for(let i = 0; i < list.length; i++){
                //check if the element exists
                if(list[i]){ //removed !
                    return true; //changed to true
                }
            }
            //else it is provided
        }else{
            for(let i = 0; i < list.length; i++){
                //check if func invoke is true anywhere
                if(func(list[i], i, list)){ //removed !
                    //if it finds ANYTHING false
                    return true; //changed to true
                }
            }
        }
        //else it's an object...
    }else{
        //check if provided
        if(func === undefined){ //edge case //so it can still iterate to find anything false
            //loop over object
            for(let key in list){
                ////check if func invoke is true anywhere
                if(list[key]){ //removed !
                    //key does not exist
                    return true; //changed to true
                }
            }
            //else it is provided
        }else{
            //iterate yet again...
            for(let key in list){
                //check if key exists
                if(list[key]){  //removed !
                    //does not
                    return true; //change to true
                }
            }
        }
    }
    //otherwise
    return false; //changed to false
}
module.exports.some = some;

/**
 * reduce:
 * 
 * @param {*} array 
 * @param {*} func 
 * @param {*} seed 
 * @returns 
 */

function reduce(array, func, seed){
    let result;
    if(seed === undefined){
        result = array[0];
            for(let i = 1; i < array.length; i++){
                result = func(result, array[i], i, array);
            } 
    }else{
        result = seed;
            for(let i = 0; i < array.length; i++){
                result = func(result, array[i], i, array);
            }
        }
        return result
    
}
module.exports.reduce = reduce;

/**
 * extend:
 * 
 * @param {*} object1 
 * @param {*} object2 
 * @param {*} more 
 * @returns 
 */

_.extend = function(object1, object2, more){
    let copyObject1 = Object.assign(object1, object2, more);
        return copyObject1
}
//nice

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
