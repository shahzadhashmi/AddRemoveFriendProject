// execution context.
// whenever we create a program or function then execution context creates a box that contains var, functions and lexical environment of that function.

// EC => 
// --> Var
// --> functions
// --> lexical environment 

// lexical environment tells us either this part of code is accessible or not. let take and  example of this keyword.

// In the execution context of JavaScript, the `this` keyword refers to the current execution context.

// This means that the value of `this` will change depending on where it is used in the code.

// For example, if `this` is used in a function, it will refer to the function's execution context.

// If `this` is used in a method, it will refer to the method's execution context.

// And if `this` is used in a global context, it will refer to the global execution context.

// The following code provides an example of how the value of `this` can change depending on where it is used:


function Person() {
    this.name = "John Doe";

    console.log(this.name); // "John Doe"
}

const person = new Person();

console.log(this.name); // undefined



// In the first line of the code, `this` refers to the function's execution context.

// This means that the value of `this.name` will be "John Doe".

// In the second line of the code, `this` refers to the method's execution context.

// This means that the value of `this.name` will also be "John Doe".

// In the third line of the code, `this` refers to the global execution context.

// This means that the value of `this` will be undefined.