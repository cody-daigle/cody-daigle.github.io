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
 *          var str = 'example'; //<- assigns the variable str to the string value of 'example'
 *          var newStr = `This is a new `;
 *          str += newStr;
 *          console.log(str);
 * 
 *  -Comparison => Compares two operands and based on if the comparison is true it will return a logical value.
 *      less than => '<'
 *      greater than => '>'
 *      bang/NOT => '!'
 *      loosley equals => '=='
 *      strictly equals => '==='
 * 
 *     example:
 *         if(1 < 2) return true; //<- 1 is less than 2;
 *         if(2 > 1) return true; //<- 2 is greater than 1;
 *          1 !== 0; //<- 1 is NOT equal to 0
 * 
 *  -Arithmetic => Takes two numerical operands and returns a single numerical value
 *      add => '+'
 *      subtract => '-'
 *      remainder/factor => '%'
 *      multiply => '*'
 *      divide => '/'
 *      increment => '++'
 *      decrement => '--'
 * 
 *      example:
 *          let one = 2 - 1;
 *              console.log(one); //<- 2 will decrement by 1.
 * 
 *  -Logical => Used with logical values to return a boolean or a value of the operand
 *      bang => '!'
 *      OR => '||'
 *      AND => '&&'
 * 
 *       example:
 *           1 !== 0; //<- 1 is NOT equal to 0
 *                  console.log(one);
 *  -Unary => Operators that take in a single operand and perform all the operations on that single operand
 *      delete
 *      typeof
 *      void =>
 * 
 *       example:
 *         **Put example here**
 *      
 *  -Ternary(Conditional Operator) => The only operator that takes three operands, in Javascript. The operator can have one of two values 
 *              based on the given condition. I look at it like an if-else statement.
 *      ternary => condition ? value : value1; //if the condition is met then return value else return value1
 * 
 *       example:
 *          **Put example here**
 *
 * 
 */