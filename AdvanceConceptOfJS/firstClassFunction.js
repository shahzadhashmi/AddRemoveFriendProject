// First Class Function in JS.
// First class function is a concept in js, We can treat function as a value.
// In JavaScript, functions are considered "first-class citizens," which means they are treated like any other data type, such as numbers or strings. This concept of "first-class functions" has several important characteristics:

// example
// 1: Functions can be assigned to variables:
// You can assign a function to a variable, making it a reference that can be passed around, returned from other functions, and manipulated like any other value.

const sayHello = function() {
    console.log("Hello");
};

// sayHello(); // call the function through variable

// 2: Functions can be passed as arguments:
// Functions can be passed as arguments to other functions, allowing you to create higher-order functions that take functions as inputs.

function executeFunction(argumentFunction) {
    argumentFunction();
}

// executeFunction(sayHello);

// 3: Functions can be used as properties of objects:
// Functions can be defined as properties of objects, which is a fundamental concept in object-oriented programming.

const person = {
    name: "John",
    age: 30,
    greetings: function () {
       console.log(`Hi! My name is ${this.name}`);
    },
};
// person.greetings();