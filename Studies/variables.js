/**
 * VARIABLES:
 *  0. Variables are named containers that store data. These containers hold values in memory and point to any datatype such as an
 *  array, number, boolean, string, object, etc. There are three keywords that are used to create a variable; var, let, and const. 
 *  All though effectively the same thing, each one has niche capabilities that the others may not. 
 *  With that being said using the wrong one could also affect the code to a point of errors. 
 *  The actions that are taken for variables are Declaration, Assignment, Initialization,
 *  and even Reassignment, depending on the keyword used.
 * 
 * 1. Declaration - Stating the named variable
 * 
 * 2. Assignment/Initialization - Giving the named variable a value.
 * 
 * 3. Reassignment - After a varaible has been assigned a value it can be reassigned later in the code, if needed.
 * 
 * 4.Var, Let, Const - Each keyword has different capabilies and uses. Var and Let Keywords can be reassigned another value 
 *      where as const or 'Constant' variables cannot be reasigned another value. The difference between var and let is 'Let' is block scoped 
 *      and must be declared before it can be used, but 'VAR' is function scoped, can be accessed throughout the function 
 *      and can be used before declared due to hoisting
 */

//declaration with var
var cooking;
//assignment
cooking = 'Food';
//logging to console
console.log(cooking); //logs 'Food' to console

//declare with let
let baking = 'Bread';
console.log(baking); // will log 'Bread' to console
//reassignment
baking = 'Cake';
//log to console
console.log(baking); //logs 'Cake' to console

//declaring with const
const kitchen = 'Dirty';
//log to console
console.log(kitchen); //logs 'Dirty' to console
//reassign attempt
kitchen = 'Clean';
//log to console. SHould return error
console.log(kitchen); //logs TypError: Assignment to constant variable
