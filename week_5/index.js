// calculator using generator function
function *Calculator(){
   
    while(true){
        try {
             const instruction = yield "next calculation";

            const {num1, num2 , operator} = instruction;

            if(typeof num1!='number' || typeof num2!= 'number') throw new Error("Type error : inputs must be numbers");

            let result;
            switch (operator) {
                case '+': result = num1+num2;
                    break;
                case '-': result = num1-num2;
                    break;
                case '*' : result = num1*num2;
                    break;
                case '/': 
                    if(num2==0) throw new Error("denominator can not be zero");
                    num1/num2;
                    break;
            
                default:
                    throw new Error("Invalid operator");
                    break;
            }
               yield result; 
        } catch (error) {
            yield error.message;
        }
    }
}

const calc = Calculator();
calc.next();

const op1 = calc.next({num1:23 , num2 : 87 , operator : '*'});
console.log(op1.value);
calc.next();

const op2= calc.next({num1 : 9 , num2 : "4" , operator : '+'});
console.log(op2.value);
calc.next();

const op3 = calc.next({num1 : 23 , num2 : 0 , operator : '/'});
console.log(op3.value);



