// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    //takes a string as it's only input
    //turn string into an array
    let str = input.split('');
    //reverse the array
    let rev = str.reverse();
    //returns a new string representng the input string reversed
    //turn back into string
    let final = rev.join('');
    return final;
    
    // OR the boring way

  //   //create storage for each letter
  //  let storageArray = '';
  //  //loop through the input to get each letter at each index, starting from the end
  //  for(let i = input.length - 1; i >= 0; i--){
  //   //beginning pushing each letter, at the end of input to the beginning of the storageArray
  //   storageArray += input[i];
  //   //return it joined back as a string
  //  }
  //  return storageArray;
   
   
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}