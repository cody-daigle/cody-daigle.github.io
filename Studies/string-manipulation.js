/**
 * 
 *  STRING MANIPULATION:
 *  
 * 0. Strings are primative datatypes that store data in text form and are used to to represent and manipulate characters.
 *  A string is text within either '' single quotes or "" double quotes. They can also created with ``backticks as 
 *  template literals. It is important to to undestand that strings are immutable, meaning the content's cannot be changed
 *  once created. However, in JavaScript, there are many ways to manipulte this data and return new pieces of data.
 * 
 * 1. Operators 
 *      In JavaScript there are two string operators that are used to concatenate strings together.
 *      The concatenate operator '+' with add strings together and create a whole new string that will add the contents of the strings
 *      the operator was used with. This is called string concatenation, which will start the the first letter of the additional string
 *      immediately after the last letter in the first string.
*/  let firstName = 'Cody';
    let lastName = 'Daigle';
    let fullName = firstName + lastName; //No space to show how immediate the second string follows the first.
    console.log(fullName) //logs CodyDaigle 

/**
 * 2. String Methods:
 *      There may only be a few string operators, but strings are not lacking in the 'method' department. 
 *      Ironically there is also a concat method that is used just like the operators above.
 *      JavaScript has various methods of manipulation that are frequently used:
 */   
 //     String.concat() - Combines two or more strings together into a new string.
           console.log(firstName.concat(lastName)) //logs CodyDaigle 

 //     String.toUpperCase() - Changes the string to have all uppercase letters.
           console.log(firstName.toUpperCase()); //logs CODY

 //     String.toLowerCase() - Changes the string to have all lowercsae letters.
            console.log(firstName.toLowerCase()); //logs cody

 //     String.slice() - Removes a portion of a string and returns a new string.
            console.log(firstName.slice(1)); //logs ody

 //     String.split() - Turns the string into an array of substrings
            console.log(first.split('')); //logs ['c', 'o', 'd', 'y', 'D', 'a', 'i', 'g', 'l', 'e']

 //     String.length - Returns the length of the string, also including spaces.
            console.log(firstName.length); //logs a length of 4

 //     String.charAt() - Returns the character at the provided index.
            console.log(firstName.charAt(2)); //logs 'd'

 //     String.indexOf() - Returns the index of the first occurrence of a substring that is within a string. Otherwise returns -1.
            console.log(fullName.indexOf('d')); //logs 2

 //     String.lastIndexOf() - Returns the index of the last occurrence of a substring within a string. Otherwise returns -1.
            console.log(firstName.lastIndexOf('ai')); //logs -1 becuase 'ai' does not exist in firstName

 //     String.replace() - Used to search a string to replace a substring with a replacement or can be used with regex for more a narrowed search.
            console.log(fullName.replace('y', 'y ')); //replace the y character with a y and a space logs Cody Daigle

 //     String.search() - Searches for a match of a regex and returns the index of the match or it returns -1.
            console.log(firstName.search(/[a-z]/g)); //seach for lowercase letter. Logs index 1.

 //     String.match() - Accepts regex and is matched against a string.
            console.log(fullName.match(/[^a-z]/g)); // Logs ['C', 'D'] when using match on non-lowerCase letters

 //     String.subString() - A returned portion of a string from a provided start and ending index.
            console.log(fullName.substring(0, 5)); //CodyD