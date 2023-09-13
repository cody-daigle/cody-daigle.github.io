////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step){
  let output = [];
  if(step === undefined){// || step === 0
    if(start < end){
    for(let i = start; i <= end; i++){
      output.push(i)
      }
    }else if(start > end){
      for(let i = start; i >= end; i--){
        output.push(i)
      }
    }
  }else{
    if(step > 0){
      for(let i = start; i <= end; i += step){
        output.push(i);
      }
    }else{
      for(let i = start; i >= end; i += step){
        output.push(i);
      }
    }
  }
  return output;
}



// function range(start, end, step=1){
//   let output = [];
//   if (step < 0){
//     for(let i = start; i >= end; i += step){
//   output.push(i);
//     }
//   }else if(step > 0){
//     for(let i = start; i <= end; i += step){
//     output.push(i);
//     }
//   }else{
//     for(let i = start; i <= end; i++){
//       output.push(i);
//     }
//   }
//   return output;
// }


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
return array.reduce((acc, curr) =>{
  acc += curr
  return acc
}, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let output = [];
  for(let i = array.length - 1; i >= 0 ; i--){
    output.push(array[i])
  }
  return output;
//return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for(let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
//base
if(list.rest === null){
  array.push(list.value);
  return array;
}
//recursion
array.push(list.value);
return listToArray(list.rest, array)
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
return { value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  //base
  if (!list){
    return undefined;
  }
    //recursion
  if(n === 0){
    return list.value;
  }
    return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  //determine if x and y are NOT objects
  if(typeof x !== 'object' && typeof y !== 'object') return x === y;
    //determine if x OR y is not an object
    if(typeof x !== 'object' || typeof y !== 'object') return false;
  //create arrays each inputs keys;
  let xKeys = Object.keys(x); //['a']
  let yKeys = Object.keys(y); //['a']
  if(xKeys.length !== yKeys.length) return false;
  //iterate to determine if array keys match and values at keys match
    for(let i = 0; i < xKeys.length; i++){
    //determine if current ket is not included in yKeys
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) return false;
  }
  return true;
};
// deepEqual({x: 1},  'x')

//   if(x === y) return true; 
//   if(x === null || typeof x !== "object" || y == null || typeof y !== "object"){
//     return false;
//   }
//   let keysX = Oyject.keys(x);
//   let keysY = Oyject.keys(y);
//   if(keysX.length != keysY.length) return false;
//   for(let key of keysX){
//     if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
//   }
//   return true;
// }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
