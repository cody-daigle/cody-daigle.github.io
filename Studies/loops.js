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
 *  Javascript statements for loops are:
 * 
 *  -for statement - This will loop repeatedly until the given condition evaluates to false. 
 *      Utilized when the interation amount IS NOT known
 *  -for...of statement - 
 *  -for...in statement - 
 *  -while statement - Unlike the for and do...while this will execute until the condition evaluates to true. 
 *      Utilized when the interation amount IS known 
 *  -do...while statement - Repeats until specified condition evaluates to false, just like the for loop.
 *  -break statement - This is utilized to terminate a loop or specified label statement, to transfer control to the following statement
 *  -continue statement - 
 *  -labeled statement - Is an identifier that will allow you to refer to it anywhere within the program or 
 *      to identify a loop in order to act upon that loop
 * 
 */

for (initialization; condition; afterthought)
  statement

do
  statement
while (condition);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}


