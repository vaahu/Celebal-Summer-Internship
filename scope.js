//in nromal case it'll print function variable global variable 
var name ="global variable";

function scopeDemo(){
    var name = "function variable";// but if we remove this then it will print global global because it will refer to the outer scope  
    console.log(name);
}
scopeDemo();
console.log(name);

//An Execution context is an environment where JavaScript code is executed.
// there are two 
// 1.) Global Execution Context (GEC):
// - The Global Execution Context is the default execution Context where all
// javascript code that is not inside of any function.
// - Everything happens in a global execution context.in this phase, memory is
// allocated to all the variables and functions.
// - There can be only one global execution context in a program.
// 2.) Function execution context :
// - A new execution context is created whenever a function call is encountered.
// - There can be multiple function execution contexts

// EXECUTION STACK
// - An execution stack is used to store all the execution contexts which are
// created during the code execution.
// - An execution stack is also known as a calling stack(LIFO structure) in other
// programming languages.
// - When the JavaScript engine first encounters JavaScript code, it creates a
// global execution context at the bottom and all the subsequent function
// invocation is pushed to the top of the stack.
// - The JavaScript engine executes the function whose execution context is at
// the top of the stack. When this function completes, its execution stack is
// popped off from the stack.


function c(){
    console.log("Inside c");
}

function b(){
    c();
    console.log("Inside b");
}
function a(){
    b();
    console.log("Inside a");

}
a();
console.log("This is global context");

// 1st context - global context[ ]
// 2nd - execution context -a()
// 2nd - execution context -b()
// 2nd - execution context -c()
// global context 
//  once c is completed then c will be poped out of the execution stack then b then a and finally it will refer to the global context 


function multiply(a, b) {
    return a*b;
};

console.log(multiply);