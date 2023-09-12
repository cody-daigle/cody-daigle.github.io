/**
 * 
 * FUNCTIONS:
 * 
 * 0. A statement, or set of statements, that performs a task or calculates a value. This operation is similar
 *  to a procedure. In order to classify as a function, it must take in some input and return an output. Also,
 *  the two must have an obvious relationship with one another. Facebook Official, if you will. Furthermore,
 *  these requirements are called 'parameters' that are passed to a function by a value.
 * 
 * 
 * 1. Operations:
 * 
 *  There are two steps when it comes to using functions:
 *  First, you need to create a function definition or function expression.
 *  Next, the function can be executed by calling, or invoking, it.
 */   let multiply = function(x, y){ //<- Function expression
        return x * y} 
 /* Execute, Call, and Invoke mean the same in regards to the function. So, dealer's choice on the verbage.
 */  console.log(multiply(7, 4)) //logging the invokation of multiply
 /*
 * 2. Differences:
 * 
 *  -Parameters: These are the names attached to the function's definition.
 */   let person = function(name, age){ //<- this function has two paramters named name & age.
        return `${name} is ${age} years old`} 
 /* -Arguments: These are the values passed to the function that initialize the parameters.
 */     console.log(person('Cody', 32)) //'cody' is the argument for name and 32 is the argument for age
 /* 
 * 3. Named Function Syntax:
 * 
 *  Providing a name allows it to refer to itself, be identified, and allow it to be hoisted. 
 */   function add(x, y){return x + y} //<- this function is declared with the name directly
        console.log(add(14, 14)) //logging the invocation of add()
 /* 
 * }
 * par(arg1, arg2) //<- Syntax for the invokation, call
 * 
 * par = function(para1, para2){ 
 * 
 * }
 *
 * 
 * 4. Assigning a Function to a Variable:
 * 
 * 5. functions can optionally take inputs and optionally return a single value. How do we
 * specify inputs and how do we specify outputs
 * 
 * 6. Scope: Functons can see and modify variables in parent or global scopes. The inverse is NOT true <- question? just information?
 * 
 * 7. Closures: Functions form closures around the data they house. if an object returned from the function and is
 * held in memory somewhere or referenced that closure stays ALIVE and data can cont to exist in these closures
 */

/**
 *
 * . Functions: A piece of code that can be summoned by other code, a variable, or even itself. These snippets contain arguments, or 'seats', 
 *      that are passed into the function so that it may return a value. The function's scope is dependant on whether if the name is a declaration or
 *      an expression. console.log() is a common function we utilize to print to the console
 */

//function that takes in one perarameter that represents a string

let drinks = ['Coke', 'Mtn Dew', 'Big Shot']; //This a list of data that is being changed
  function fizz(soda) { //function declaration
    drinks.push(soda); //adds the element to the end of the array
    console.log(drinks);
}
fizz('Pepsi');
