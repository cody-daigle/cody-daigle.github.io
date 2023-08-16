// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
   //loop through numbers
   for(let i = 1; i <= 100; i++){
    //i is all numbers between i & 100
//check if i is divisible by 3 & 5
    if(i % 3 === 0 && i % 5 === 0){
    //log string if true
        console.log('FizzBuzz');
    //check if only factor of 3
    }else if(i % 3 === 0){ //apparently it's sensative with which one is 3 and which one is 5...
    //log string if true
        console.log('Fizz');
    //check if only factor of 5
    }else if(i % 5 === 0){
    //log string if true
        console.log('Buzz');
        //else its a number not divisible
    }else{
        console.log(i)
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}