// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cody-daigle.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //get all male customers and return the amount
    let males = array.filter((customer => {
        return customer.gender === 'male'
    }));
    return males.length
};

var femaleCount = function(array){//output is a number
    return array.reduce((acc, curr) =>{
        if(curr.gender === 'female'){
         acc += 1 //if finds female increment the number
        }
        return acc
    }, 0)
};

var oldestCustomer = function(array){
    //reduce to return oldest customer obj in array
    let old = array.reduce((acc, curr) =>{
        //if acc is younger than curr person then make acc that 
        if(acc.age < curr.age){
            //the acc is now the previous curr
            acc = curr;
        }
        return acc
    })
    //no seed
    //return cust name
    return old.name
};

var youngestCustomer = function(array){
    //reduce to return youngblood customer obj in array
    let baby = array.reduce((acc, curr) =>{
        //if acc is older than curr person then make acc that 
        if(acc.age > curr.age){
            //the acc is now the previous curr
            acc = curr;
        }
        return acc
    })
    //no seed
    //return cust name
    return baby.name
};

var averageBalance = function(array){ //outputs a number
    //remove symbol
     let num = array.map(ele => ele.balance.replace(/['$', ',']/g, ''));
    //parse into float
    let parse = num.map(x => parseFloat(x));
     //console.log(parse)
    //reduce to one number
    let avg = parse.reduce((acc, curr) => {
      acc += curr
      return acc
    })
      //divide by amount of people
    return avg / array.length
  };

  var firstLetterCount = function(array, letter){
    //list of all the customers names
  let names = array.map(ele => ele.name);
  console.log(names);
  let filtered = names.filter(person => {
    if(person.charAt().toUpperCase() === letter || person.charAt().toLowerCase() === letter){
      return true;
    }else{
      return false;
    }
 
  })
  return filtered.length
  
};

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
