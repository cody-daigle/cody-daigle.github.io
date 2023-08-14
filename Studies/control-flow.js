/**
 * CONTROL FLOW:
 * 
 * 0. The Control Flow is the order the computer executes code in a script. The order is from the first line in the file to the last, however
 *  more often than not, the computer runs accross structures, such as conditionals and loops, that alter the Control Flow thus changing the order 
 *  all together. The Control Flow can determine the ultimate difference between imperative programming and declarative programming. These differ
 *  from one another by how they react to a program. Imperative is all about the 'how'; How the program operates each step, while Declatative is about the 'what';
 *  what the program should accomplish. Therefore the control flow is imperative due to the 'flow' or steps its taking.
 *  
 * 1. Conditionals: A set of rules that is capable of interupting ,or even change, normal code execution dependant up if the condition is met or not.
 *      Some examples of a conditional is an if...else statement or a switch statement.
 *
 * 2. Functions: A piece of code that can be summoned by other code, a variable, or even itself(yikes). These snippets contain arguments, or 'seats', 
 *  that are passed into the function so that it may return a value. The function name's scope is dependant on whether if the name is a declaration or
 *  an expression.
 * 
 * 3. Loops: A sequence of instructions that is repeated, in a 'loop', until the specified condition becomes truthy. Loops are one of the interative methods used
 * to execute a statement for a variable a multiple amount of times.
 *      Some examples would be a for loop, for in loop, for of loop, etc
 * 
 */

//conditional
let drink = 'water';
if(drink === 'Coke'){
    console.log('Invented by a pharmacist');
} else if(drink === 'water'){
    console.log('Hydration Nectar');
}

console.log(drink); //<-- Will log 'Hydration Nectar' to the console.

//functions
function fizz(soda){
    let drinks = []; //    Might want to find a better example
    soda += drink
    drinks.push(soda);
    console.log(drinks);
}
fizz('Pepsi');

//Loops
let snack = {
    crunch: 'Chips',
    soft: 'Cookies',
    chewy: 'Gummies'
}
for(let key in snack){
    console.log([key]) //<-- Will log the keys crunch, soft, chewy to console.
    console.log(snack[key]) //<-- Will log the values Chips, Cookies, Gummies to the console
}
