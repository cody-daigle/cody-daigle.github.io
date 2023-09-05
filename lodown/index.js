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
 * @param { Array } Takes in an array of which the index is needed.
 * @param { Value } Function takes a element value to be searched for.
 * @returns { Index or -1 } Function returns the index of the search item's first occurance. Returns -1 if element is not in the array.
 */

function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(!array.includes(value)){
            return -1;
        }else if(array[i] === value){
            return i;
        }
    }
}
module.exports.indexOf = indexOf;

/**
 * contains: Takes in an array and a value and checks the array elements if it contains the value.
 * 
 * @param { Array } Takes in an array to iterate through.
 * @param { value } Function takes in a value input and checks through the array for that value
 * @returns { Boolean } Function returns true if the input value was in the array and false if it is not in the array.
 */

function contains(array, value){
   return array.includes(value) ? true : false
}
module.exports.contains = contains;

/**
 * unique: This function takes in an array and checks for unique characters. If there are duplicates they are removed.
 * 
 * @param { Array } Function takes in an array
 * @returns { Array } Function returns a new array with any duplicates removed
 */

function unique(array){
    return [...new Set(array)]
}
module.exports.unique = unique;

/**
 * filter: Filter takes in an array and calls it's call back function for each item within the array, to perform a specific action.
 * 
 * @param { Array } Function takes in an array to iterate through
 * @param { Function } Function takes in a callback function to perform an action on each iteration
 * @returns { Array } Returns a new array with the items from the original array that passed the callback functions condition
 */

function filter(array, func){
    let filtered = [];
    for(let i = 0; i < array.length; i++){
    if(func(array[i], i, array)){ 
        filtered.push(array[i]);
        }
    }
    return filtered
}
module.exports.filter = filter;

/**
 * reject: Inverse of Filter. Takes in an array and calls the callback function for each item within the array, and those that do not meet the condition
 * will be added to a new array
 * 
 * @param { Array } Takes in an array
 * @param { Function } Takes in a callback function to perform an action on each iteration
 * @returns 
 */

function reject(array, func){
    let rejected = [];
    for(let i = 0; i < array.length; i++){
    if(func(array[i], i, array) === false){ 
        rejected.push(array[i]);
        }
    }
    return rejected
}
module.exports.reject = reject;

/**
 * partition: This function takes in an array and a callback function. The callback function is invoked on each iteration to determine 
 * if the element is truthy or falsey. All elements will be divided into a truthy array and a falsey array, within an array
 * 
 * @param { Array }  Function takes in an array to iterate through
 * @param { Function } Funtion takes in a callback function and is invoked on each element to determine if element is truthy or falsey
 * @returns { Nested Array } Returns a nested array with two arrays. Truthy elements in one array index and the falsey array in the other.
 */

function partition(array, func){
    let trues = [];
    let falses = [];
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
 * pluck: Takes in an array of objects and interates through every element and returns an array with all the properties
 * 
 * @param { Array } Function takes in an array to iterate through.
 * @param { Property } Function takes in a property value
 * @returns { Array } Returns an array with either the prop value updated if it exists. If it does not exist then the property value is added.
 */

function pluck(array, prop){
   let items = array.map(obj => {
    return obj[prop];
   })
   return items
    
    
}
module.exports.pluck = pluck;

/**
 * every: Every takes in an array or an object and iterates through each element testing if 'every' item is truthy. 
 * If even one item is falsey then false is returned
 * 
 * @param { Array or Object } Funtion takes in an array or an object.
 * @param { Function } Function takes in a callback function that is invoked on each iteration
 * @returns { Boolean } Returns a boolean depending on whether each element was truthy or not.
 */

function every(list, func){
        if(Array.isArray(list)){        
        if(func === undefined){             
            for(let i = 0; i < list.length; i++){               
                if(!list[i]){
                    return false;
                }
            }           
        }else{
            for(let i = 0; i < list.length; i++){                
                if(!func(list[i], i, list)){                    
                    return false;
                }
            }
        }    
    }else{        
        if(func === undefined){             
            for(let key in list){                
                if(!list[key]){                    
                    return false;
                }
            }            
        }else{            
            for(let key in list){                
                if(!list[key]){                    
                    return false;
                }
            }
        }
    }
    
    return true 
}
module.exports.every = every;

/**
 * some: Inverse of Every. Takes in an array or object to iterate through each element, testing if at least
 * one element in the collection is truthy.
 * 
 * @param { Array or Object } Function takes in an array or an object to iterate through 
 * @param { Function } Callback function checks each element in the array for a truthy element.
 * @returns { Boolean } Returns a boolean value based off whether a truthy element was found or not.
 */

function some(list, func){
       if(Array.isArray(list)){       
        if(func === undefined){           
            for(let i = 0; i < list.length; i++){                
                if(list[i]){ 
                    return true; 
                }
            }            
        }else{
            for(let i = 0; i < list.length; i++){                
                if(func(list[i], i, list)){                     
                    return true; 
                }
            }
        }
    }else{
        if(func === undefined){
            for(let key in list){
                if(list[key]){ 
                    return true; 
                }
            }
        }else{
            for(let key in list){
                if(list[key]){ 
                    return true; 
                }
            }
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: The reduce function will iterate through the array and combine all the elements into a singular element, beginning 
 *          with the seed value, if provided.
 * 
 * @param { Array } Function takes in an array
 * @param { Function } Callback that is called on each item, starting at seed if given, and accumulates values one by one
 * @param { Seed } Seed is the starting point the iteration begins reducing
 * @returns { Mulitple Types } This function will iterate through arrays or even numbers. The callback function is called on each
 *                              element, starting at the seed, and it accumulates until the loop is complete and returns a single value
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
 * extend: Extend creates a copy object, so the original is not mutated, and combines all subsequent objects that may or may not be passed in.
 * 
 * @param { Object } Function takes in an object
 * @param { Object } Function takes in an object
 * @param { Continued } Potentially more objects as parameters.
 * @returns { Object } Returns a copy of the object and adds all subsequent objects that is passed in.
 */

_.extend = function(object1, object2, more){
    let copyObject1 = Object.assign(object1, object2, more);
        return copyObject1
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
