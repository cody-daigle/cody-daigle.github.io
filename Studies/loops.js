/**
 * 
 *  LOOPS:
 * 
 * 0. Loops are methods that are utilized in to go through a sequence of instructions, repeatedly, until a certain condition is met.
 *  This is necessary in order to gain access to elements, keys, values, properties, etc that are within list like structures such as
 *  arrays and objects. For structures like arrays one might use a 'for-loop' and for objects a for-in-loop. Now, these are both executed
 *  differently due to the structure you are using it against, but the idea of searching iterating until the desired condition is met will
 *  be the same. There are multiple types of 'Loops' that are used in Javascript and they all have special uses in order to acheive some
 *  goal. Some loops are created to iterate through an array forwards or backwards to look for a specific element or even to specific indexs.
 *  There are even loops that can be used in order to iterate through Objects to get the key, value, or even both at the same time.
 * 
 *  Javascript loops:
 *  -while loop - This will execute until the condition no longer evaluates to true. Utilized when the interation amount is unknown.
 *    While loops will check the condition first, then execute the statement
 */ let n = 0;
    let x = 0;
      while (n < 3) { //<- will continue to iterate as long as n is still less than 3
        n++;  //<- n increments by 1 makeing the next iteration '(1 < 3)'
        x += n; //<-value of x is added to the value of n and reassigns x to that total.
        console.log(x) //<- logs x = 1 -> x = 3 -> x = 6;
}
 /*  -for loop - A statement that creates a loop with three expressions, commonly when working with arrays. Optional expressions. I.E. for(one; two; three). 
 *     The first expression is executed, once, before the code block is executed. The second defines the condition for executing
 *     that code block. Lastly, the final expression is executed after every time the code block executes. 
 *     W3Schools describes for-loops, essentially on par, as 'Honey Badgers'. Let me explain: The first expression is used to initialize the
 *     variable thats being used in the for loop. Normally, but JavaScript could care less. It's optional... Now, the second expression is to be used
 *     to evaluate the initial variables condition. Normally. But again, JavaScript does not care. However, if you don't provide the second expression
 *     you must place a break inside the loop or else it will create an infinite loop and crash your browser. The third expression is what increments
 *     (or decrements) the value of the initial variable. But alas, Optional. JavaScript in a mood. Long winded, but entertaining.
 */ let array = [1, 2, 3, 4, 5, 6];
        //iterate forwards starting at FIRST index
      for(let i = 0; i < array.length; i++) console.log(array[i]);
        //iterate backwards starting at LAST index
      for(let i = array.length - 1; i > 0; i--) console.log(array[i])
 /*     
 *  -for...in - A statement that loops through an object's enumerable string properties. However, properties keyed with symbols are ignored.
 *      With every iteration it returns a key from the object so that it can be utilized to access it's value. Mind you, a for-in loop can also
 *     be used to iterate over an array's properties, but array's are index based and objects are not specifically ordered. So if the index order
 *     is necessary then this method should not be used for the array(s).
 */  let snack = {
      crunch: 'Chips',
      soft: 'Cookies',
      chewy: 'Gummies'
}
      for (let key in snack) {
    console.log(key) //<- Will log the keys: crunch, soft, chewy to console.
    console.log(snack[key]) //<- Will log the values: Chips, Cookies, Gummies to the console
}
 /*
 * Looping example, counting down, based on an unknown number
 */
 function numbersDown(n){
  //count from n to 0;
for(let i = n; i >= 0; i--){
  console.log(i); //logs n and decrements by 1 until i is equal to 0
}
}
console.log(numbersDown(5)); //<- 5, 4, 3, 2, 1, 0 is logged

/*
* Looping example, counting up, based on an unknown number
*/

function numbersUp(n){
  //count from 0 to n
  for(let i = 0; i <= n; i++){
  console.log(i) //logs 0 and increments by 1 until i is equal to n;
}
}
console.log(numbersUp(6)); //<- 0, 1, 2, 3, 4, 5, 6 is logged






