// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

    //range([start=0, end, increment/decrement])
    //create output array
    let output = [];
    //check if start is less than end
    if(start < end){
        //loop between start number until it is equal to end
        for(let i = start; i <= end; i++){
            //push each counting number to the array
            output.push(i);
        }
        //else start is larger than end
    }else if(start > end){
        //iterate through two numbers, but adding the numbers from end to start
        for(let i = end; i <= start; i++){
            //undhift the number into output
            output.unshift(i);
            
        }
    }
    return output

    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
