// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.flat()
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, 
an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops
 if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update 
 function to create a new value and starts from the beginning.
*/
function loop(value, test, update, body) {
  for(let i = value; test(i); i = update(i)){
    body(i)
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for(let ele of array){
    if(!test(ele)){
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
   //create an array that will go from left to right
   let ltr = [];
   //create an array that will go from right to left
   let rtl = [];
   //iterate through input string
   for(let i = 0; i < string.length; i++){
    //create a variable and set it to the strings character code and iterate through array of script
    let scriptName = characterScript(string.charCodeAt(i));
    //if scriptName does not equal null
    if(scriptName !== null){
      //if script name direction is left to right
      if(scriptName.direction === 'ltr'){
        ///push the scriptName into the left to right array
          ltr.push(scriptName);
      }else{//else
        //push scriptName into rtl
        rtl.push(scriptName);
      }
    }
   }
   //compare the lengths of the ltr/rtl arrays
   if(ltr.length > rtl.length){
   //return left to right
   return 'ltr'
   }else {///else
   //return right to left
   return 'rtl';
   }
 
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
