//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { each } = require("lodash");

//const { set } = require("lodash");

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let str = Object.keys(object);
return str.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //store strings
    let arr = [];
    for(let key in object){
        let keys = object[key];
    if(typeof keys === typeof 'string'){
        arr.push(keys);
        }
    }
    return arr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let first = string.charAt().toUpperCase();
    let rest = string.slice(1).toLowerCase();
    return first + rest;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //empty array
    let storage = [];
    //split array
    let arr = string.split(' ');
    for(let i = 0; i < arr.length; i++){
    let first = arr[i].charAt(0).toUpperCase();
    let rest = arr[i].slice(1).toLowerCase();
    let last = first + rest;
    storage.push(last);
    }
return storage.join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(!object.noises || object.noises.length <= 0){
        return 'there are no noises';
    }else {
        return object.noises.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
        return true;
    }else{
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"*/

function isFriend(name, object) {
  //variable to store friends?
//loop through friends array of object
if(!object.friends){
    return false;
}
//account for conditions
//remove all things that arent needed?

 for(let i = 0; i < object.friends.length; i++){
    //object.friends[i] is each friend in the friends array
    let friend = object.friends[i];
    //check if name being searched is in friend array
    if(friend === name){
        return true
        } 
    }
    //return outside of for loop so it still iterates...you knew that...
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
i: a name and an array
o: a list of the names that the input is NOT friends with
c: capitalized first letter of names
e: account for empty array
*/
//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
        //make a variable to store the list of names the input is not friends with
      let notFriendsList = [];
      //iterate through the array of objects
        for(let i = 0; i < array.length; i++){
            //arr is each object
        let arr = array[i]
           //iterate through each friends array
           if(name !== arr.name){
               //loop thrugh that persons friends list?
               //this is each person in an objects friends array
            let friend = arr.friends 
               //see if they have friends?
               //check if the input name is in that persons friends array
            if(!friend.includes(name)){
                //if not in their friends array then push that name to not friends
            notFriendsList.push(arr.name);                  
            }
        }
    }
            return notFriendsList;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."
function updateObject(object, key, value) {
let obj = Object.assign(object, key)
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}