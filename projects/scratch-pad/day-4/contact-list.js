// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *              "Max Gaudin\nJohn Fraboni"         
 * 
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts =[];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact)
        },
        findContact: function(fullName){
            //iterate through contacts list
            for(let i = 0; i < contacts.length; i++){
                //contacts[i] is each contact
            //check if fullName includes contacts[i].nameFirst
                if(fullName.includes(contacts[i].nameFirst)){
                    //return the contact object
                    return contacts[i];
                    //else return undefined
                }else{
                    return undefined;
                }
            }
            
        },
        //takes a contact object to be removed from the contact-list.
        removeContact: function(contact){
                //create storage array
            //iterate through contacts array
            for(let i = 0; i < contacts.length; i++){
            //contacts[i] is each object
            //splice returns a shallow copy of all the contacts that are not 'contact'
            if(contacts[i].id !== contact){
                //splice into the shallow copy, delete contact
                contacts.splice(i, 1)
                }
                
            }
            
        },
        printAllContactNames: function(){
            //create empty string variable
            let names = '';
            //iterate over contacts array
            for(let i = 0; i < contacts.length; i++){ //contacts[i] is each object in contacts array
                //create condition to not do last element
                if(contacts[i] === contacts[contacts.length - 1]){
                    // create finalName variable for last contact without \n 
                    let finalName = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
                    //add the name at final index
                    return names += finalName;
                    //else its still looping and adding to names string
                } else{
                    // create fullName variable for list
                    let fullName = `${contacts[i].nameFirst} ${contacts[i].nameLast}\n`; 
                    names += fullName;
                }     
            }
        }
    }
}


// The printAllContactNames() Function should 
//  return a String formated with all the full-names of the separated 
//  with a line-break, like so:

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
