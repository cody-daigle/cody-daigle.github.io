/**
 * 
 * CONTROL FLOW:
 * 
 * 0. The Control Flow is the order the computer executes code in a script. The order goes from the 
 *  first line in the file to the last, however more often than not, the computer may run accross 
 *  structures, such as conditionals and loops, that will change that. These structures can alter the Control Flow, 
 *  thus changing the order all together. The Control Flow can determine the ultimate difference between 
 *  imperative Programming and  Declarative Programming. These differ from one another by how they react to a 
 *  program. Imperative is all about the 'how'; How the program operates each step, while Declarative is 
 *  about the 'what'; what the program should accomplish. Therefore the control flow is Imperative Programming
 *  due to the 'flow' or steps its taking.
 *  
 * 1. Conditionals: A set of rules that is capable of interupting, or even change, normal code execution dependant 
 *                  on if the condition is met or not.
 * 
 *      Some examples of a conditional is an if-elseif-else statement and a switch statement.
 * 
 */

//if-elseif-else statement

let drink = 'water';
if (drink === 'Coke') { //this is checking if the variable drink is strictly equal to the string 'Coke'
    console.log('Invented by a pharmacist'); //the condition was not met so this is not logged
} else if (drink === 'water') {
    console.log('Hydration Nectar'); //the condition was met therefore will log the string.
}
console.log(drink); //<-- Will log 'Hydration Nectar' to the console.


/**
 *  2. Switch statements:
 * 
 */
//for in loop to navigate through the object

let snack = {
    crunch: 'Chips',
    soft: 'Cookies',
    chewy: 'Gummies'
}
for (let key in snack) {
    console.log(key) //<-- Will log the keys crunch, soft, chewy to console.
    console.log(snack[key]) //<-- Will log the values Chips, Cookies, Gummies to the console
}
