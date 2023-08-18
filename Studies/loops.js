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
 *  -while - This will execute until the condition evaluates to true. 
 *            Utilized when the interation amount IS known
 *  -for - 
 *  -for...in - 
 * 
 *  be able to loop any number of times, forward counting up to some limit, backward counting down to 0
 *  loop over an array, forwards and bacwards
 *  looop over an object
 * 
 * 
 */

for (initialization; condition; afterthought)
  statement

while (condition);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

let snack = {
  crunch: 'Chips',
  soft: 'Cookies',
  chewy: 'Gummies'
}
for (let key in snack) {
  console.log(key) //<-- Will log the keys crunch, soft, chewy to console.
  console.log(snack[key]) //<-- Will log the values Chips, Cookies, Gummies to the console
}



