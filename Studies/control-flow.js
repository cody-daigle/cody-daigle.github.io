/**
 * 
 * CONTROL FLOW:
 * 
 * 0. The Control Flow is the order the computer executes code in a script. The order goes from the first line in the file to the last, however
 *  more often than not, the computer may run accross structures, such as conditionals and loops. These structures can alter the Control Flow, 
 *  thus changing the order all together. The Control Flow can determine the ultimate difference between imperative programming and 
 *  declarative programming. These differ from one another by how they react to a program. Imperative is all about the 'how'; How the program
 *  operates each step, while Declatative is about the 'what'; what the program should accomplish. Therefore the control flow is imperative 
 *  due to the 'flow' or steps its taking.
 *  
 * 1. Conditionals: A set of rules that is capable of interupting, or even change, normal code execution dependant up if the condition is met or not.
 *      Some examples of a conditional is an if...else statement or a switch statement.
 * 
 */

//if else statement control

let drink = 'water';
if (drink === 'Coke') {
    console.log('Invented by a pharmacist'); //the condition was not met so this is not logged
} else if (drink === 'water') {
    console.log('Hydration Nectar'); //will be the ending result because 'water' is equal to drink
}
console.log(drink); //<-- Will log 'Hydration Nectar' to the console.

/**
 *
 * 2. Functions: A piece of code that can be summoned by other code, a variable, or even itself(yikes). These snippets contain arguments, or 'seats', 
 *      that are passed into the function so that it may return a value. The function name's scope is dependant on whether if the name is a declaration or
 *      an expression. console.log() is a common function we utilize to print to the console
 */

//function that takes in one perarameter that represents a string

function fizz(soda) {
    let drinks = ['Coke', 'Mtn Dew', 'Big Shot']; //This a list of data that is being changed
    drinks.push(soda); //adds the element to the end of the array
    console.log(drinks); //<-- Will log ['Coke', 'Mtn Dew', 'Big Shot', 'Pepsi'] to the console.
}
fizz('Pepsi');

/* 
* 3. Loops: A sequence of instructions that is repeated, in a 'loop', until the specified condition becomes truthy. Loops are one of the interative 
*      methods used to execute a statement for a variable a multiple amount of times.
*      Some examples would be a for loop, for in loop, for of loop, etc
* 
*/
//for in loop control

let snack = {
    crunch: 'Chips',
    soft: 'Cookies',
    chewy: 'Gummies'
}
for (let key in snack) {
    console.log(key) //<-- Will log the keys crunch, soft, chewy to console.
    console.log(snack[key]) //<-- Will log the values Chips, Cookies, Gummies to the console
}
