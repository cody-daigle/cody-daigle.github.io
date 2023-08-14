/**
 * DATATYPES:
 * 0. There are eight data types in Javascript: Number, Boolean, Null, Object, String, Bigint, undefined,
 * and Sybol. However there are also Object data types that may contain a date, an array, and even 
 * another object. Variables can have any data type assigned to it or reassigned since they are not 
 * confined to a specific data type. Null is defined as 'Null' and undefined is ironically defined as
 * 'undefined'. Complex data types are list-like structures called Object and array. 
 * 
 * 1. Simple/Primitive Datatypes - Primitive data types define immutable values and can be tested 
 *                      using the 'TypeOf' operator except 'null' and 'undefined'. These value are
 *                      to a function by copy meaning
 *        Most commonly utilized simple data types:
 *              Strings: Strings of text that are wrapped in quotes.
 *              Numbers: 0-9. Values that are stored as decimal numbers. 
 *              Booleans: truthy or falsey values.
 *              Undefined: A non-writable, non-configurable property of the global scope.
 *              Null: A falsey value for booleans and it is the absence of an object value
 * 
 * 
 * 2. Complex - Defined as Objects, they are indentiers that reference values in memory.
 *              These datatypes are the only mutable values and can be called/invoke. Functions are
 *              also defined as objects are can be invokes as well.
 * 
 * 
 *              Object: An 'Associative Array', list like structure that contains key/value pairs.
 *              Arrays: A list like structure that contains elements within it's indexs.
 *              Functions:
 */

var obj = { //complex
    number: 1, //simple
    string: 'Cody', //simple
    boolean: false, //simple
    array: ['list', 'of', 'items'] //complex
};
console.log(obj) //logs the Object to the console
