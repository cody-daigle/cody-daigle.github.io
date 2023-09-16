/**
 *  OPERATORS:
 * 
 * 0. Operator's are a reserved syntax used to perform a specific built in action.
 *  The level of importance, or priority, distinguishes what order these operators will
 *  be applied when an expression is being evaluated. These operators are: Assignment, Comparison,
 *  string, Arithmetic, Logical, Relational, Comma, Bigint, Bitwise, Unary, and Ternary. The best thing about
 *  the operators is that they can even be combined together to modify an expression, variable, etc.
 * 
 *  1. Operators and syntax:
 * 
 *  -Assignment => Assigns a value to the first operand based on the second operand;
 *      equals => '='
 *      concatenate => '+' or '+='
 * 
 *     example:
 */        var str = 'example'; //<- assigns the variable str to the string value of 'example'
           var newStr = `This is a new `;
           str += newStr;
           console.log(str);
 /* -Comparison => Compares two operands and based on if the comparison is true it will return a logical value.
 *      less than => '<'
 *      greater than => '>'
 *      bang/NOT => '!'
 *      loosley equals => '=='
 *      strictly equals => '==='
 * 
 *      example:
 */         if(1 < 2) return true; //<- 1 is less than 2;
            if(2 > 1) return true; //<- 2 is greater than 1;
            1 !== 0; //<- 1 is NOT equal to 0
 /* -Arithmetic => Takes two numerical operands and returns a single numerical value
 *      add => '+'
 *      subtract => '-'
 *      remainder/factor => '%'
 *      multiply => '*'
 *      divide => '/'
 *      increment => '++'
 *      decrement => '--'
 * 
 *      example:
 */          let one = 2 - 1;
               console.log(one); //<- 2 will decrement by 1.
  
 /*  -Logical => Used with logical values to return a boolean or a value of the operand
 *      bang => '!'
 *      OR => '||'
 *      AND => '&&'
 * 
 *       example:
 */          let chain = 1 !== 0 || 1 !== 2 && 1 !== 3; //<- 1 is NOT equal to 0 OR 1 is NOT equal to 2 AND 1 is NOT equal to 4.
                   console.log(chain); //<- logs 'true' to the console.

 /*  -Unary => Operators that take in a single operand and perform all the operations on that single operand
 *      delete
 *      typeof
 *      void =>
 * 
 *       example:
 */         let remove = {name: 'Cody', age: 32, isReady: true}
                delete remove.age; //<- literally deleted the age property in the remove object. Poof, outta here.
                console.log(remove) // logs {name: 'Cody', isReady: true}

 /*  -Ternary(Conditional Operator) => The only operator that takes three operands, in Javascript. The operator can have one of two values 
 *              based on the given condition. comparable to an if-else statement.
 *      ternary => condition ? value : value1; //if the condition is met then return value else return value1
 * 
 *       example:
 */         let HiMeAgain = {name: 'Cody', age: 32, isReady: true}
                let ternUp = age < 33 ? true : false; //<- checks the condition is 32 less than 33? if it is then it's true. If not then it's a liar. It's false.
                console.log(ternUp); //returns true. For now, at least.
