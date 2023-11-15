//  Stack is a linear data structure that hold a value in LIFO or FILO orders.
// In general, stacks are used when you need to keep track of the order in which elements were added, such as when you are undoing or redoing operations

const stack =[];

stack.push(1);
stack.push(2);
stack.push(3); 

console.log(stack.pop());
console.log(stack);



// we can get stack in js using console.trace().

// write me a simple program that use stack in js?

// Create a function that throws an error
function foo() {
    throw new Error('This is an error');
  }
  
  // Call the function and catch the error
  try {
    foo();
  } catch (error) {
    // Output the stack trace to the console
    console.trace();
  }
