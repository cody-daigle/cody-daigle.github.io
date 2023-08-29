/**
 * 
 * DATATYPES:
 * 
 * 0. There are many data types in Javascript such as: Number, Boolean, Null, Object, String, NaN, undefined,
 *  Function, infinity, and -infinity. However there are also Object data types that may contain a Date, an Array, and even 
 *  another Object. Variables can have any data type assigned to it or reassigned since they are not 
 *  confined to a specific data type. Null is defined as an 'Object' and undefined is, ironically, defined as
 *  'undefined'. Complex data types are list-like structures/collections called Object and array. 
 * 
 * 1. Simple/Primitive Datatypes - Primitive data types define immutable values and can be tested 
 *         using the 'TypeOf' operator except 'null' and 'undefined'. These values are copy by value,
 *         meaning the original primitive data type can not be altered in place, unless reassigned.
 *         Complex data types define mutable values and cannot be tested with 'typeOf' due to complex
 *         data types being recognized as objects to Javascript. These values are copy by reference,
 *         meaning 
 * 
 *      Simple data types:
 *          Strings: Strings of text that are wrapped in quotes.
 *          Numbers: 0-9. Values that are stored as decimal numbers. 
 *          Booleans: truthy or falsey values.
 *          Undefined: A non-writable, non-configurable property of the global scope.
 *          Null: A falsey value for booleans and it is the absence of an object value
 * 
 *      Global Properties:
 *          NaN: Global property value representing Not-A-Number.
 *          Infinity: Global property, numeric value that represents infinity. infinity < any other number.
 *          -Infinity: Attempted research, but no explaination, only that it is a thing. So I assume it is the inverse of infinity. -infinity < any other number.
 * 
 * 2. Complex - Defined as Objects, they are indentiers that reference values in memory.
 *          These datatypes are mutable and have no cap to how many key/values it can hold. Objects and Functions, which are
 *          also defined as objects, can be invoked.
 * 
 *     Complex data types:
 *          Object: An 'Associative Array', list like structure that contains key/value pairs.
 *          Arrays: A list like structure that contains elements within it's indexs. TypeOf Operator logs array as an object.
 *          Date: An object that is multiple methods to manipulate calender dates.
 * 
 *      Elephant in the room:
 *          Functions: In JavaScript these are treated as a 'first-class-citizens'. This means that they can be store into variables
 *          and passed to other functions as arguments, and returned from other functions as values. So they are merely a value and type of object. 
 *          Functions are a statement, or set of statements, that performs a task or calculates a value.
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