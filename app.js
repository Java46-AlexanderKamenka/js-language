
// Hw #definition
//1. using only two letters "a", "s" print out word ananas case insensitive AnaNAS, 
//2. write function calculate that can perform any arithmetic operation on two numbers (*, /, +, -);
//3. write any example for running the following expression fun(5)(10, 3)

console.log(`A${"a"-1}as`) //1.

function calculate(num1, num2, method) { //2.
        switch (method) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;        
            
        } 
      }
console.log(calculate(4,5, "*")) 

function fun(a) { //3
        return function(b,c) {
          return a + b +c
        }
      }
      
      console.log(fun(5)(10, 3))