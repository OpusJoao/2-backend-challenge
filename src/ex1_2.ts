type MethodEnum = 
    'add' |
    'divide' |
    'multiply' |
    'subtract' 

function calculate(method: MethodEnum, n1: number, n2:number){
    const methodsAllowed = {
        add: (n1: number, n2: number) => (n1+n2),
        divide: (n1: number, n2: number) => {
            if(n2 === 0 ) throw new Error('Error: Division by zero')
            return n1/n2
        },
        multiply: (n1: number, n2: number) => (n1*n2),
        subtract:  (n1: number, n2: number) => (n1-n2)
    }

    try {
        if (!(method in methodsAllowed)) {
            throw new Error(`Invalid method: ${method}`);
        }
        
        return methodsAllowed[method](n1,n2);
    } catch (error: any) {
        return error.message
    }

}

console.log(calculate('add', 10, 5)) // 15
console.log(calculate('divide', 10, 0)); // Error: Division by zero