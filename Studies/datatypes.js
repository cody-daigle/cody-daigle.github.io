/**
 * 
 * DATATYPES:
 * 
 * 0. There are eight data types in Javascript: Number, Boolean, Null, Object, String, Bigint, undefined,
 *  and Symbol. However there are also Object data types that may contain a date, an array, and even 
 *  another object. Variables can have any data type assigned to it or reassigned since they are not 
 *  confined to a specific data type. Null is defined as an 'Object' and undefined is, ironically, defined as
 *  'undefined'. Complex data types are list-like structures called Object and array. 
 * 
 * 1. Simple/Primitive Datatypes - Primitive data types define immutable values and can be tested 
 *         using the 'TypeOf' operator except 'null' and 'undefined'. These value are
 *         to a function by copy meaning
 * 
 *      Simple data types:
 *          Strings: Strings of text that are wrapped in quotes.
 *          Numbers: 0-9. Values that are stored as decimal numbers. 
 *          Booleans: truthy or falsey values.
 *          Undefined: A non-writable, non-configurable property of the global scope.
 *          Null: A falsey value for booleans and it is the absence of an object value
 *          Symbol: A built-in primative object whose constructor will return a unique symbol value.
 *          Bigint: Variables that are used as a storage for integer numbers that are too large to be represented by a normal Javascript number.
 * 
 * 
 * 2. Complex - Defined as Objects, they are indentiers that reference values in memory.
 *          These datatypes are the only mutable values and can be called/invoke. Functions are
 *          also defined as objects are can be invokes as well.
 * 
 *     Complex data types:
 *          Object: An 'Associative Array', list like structure that contains key/value pairs.
 *          Arrays: A list like structure that contains elements within it's indexs. TypeOf Operator logs array as an object.
 *          Functions: A statement, or set of statements, that performs a task or calculates a value.
 *          Date: An object that is multiple methods to manipulate calender dates.
 * 
 * 
 * 
 */

var obj = { //complex
    number: 1, //simple
    string: 'Cody', //simple
    boolean: false, //simple
    array: ['list', 'of', 'items'], //complex
    nonConfig: undefined, //simple
    absence: null //simple, even though it is technically an object, but Javascript is passed the point of changing this.
    
}
console.log(obj) //function that is invoked to print the specified item to the console

//Here is a list of the datatypes being defined with their respective operator

console.log(typeof(1)); //will log 'number'
console.log(typeof('Cody')); //will log 'string'
console.log(typeof(true)); //will log 'boolean'
console.log(typeof(undefined)); //will log 'undefined'
console.log(typeof(null)); //will log object
console.log(typeof(obj['array'])); //will log object
console.log(Array.isArray(obj.array)); //will log 'true' when checked if it is an array
console.log(typeof(date)); //will log 'undefined'
console.log(new Date() instanceof Date); //will log 'true' when checked if it is a date
