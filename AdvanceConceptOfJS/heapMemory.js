// Heap Memory: ?
// Heap memory is a intermediate memory , that's store the intermediate data while writing the code.
// The heap memory is an important part of the JavaScript runtime. It provides a way to dynamically allocate memory for objects and arrays. The garbage collector ensures that the heap memory is used efficiently and that memory is not wasted.

const obj = {
    name: 'John Doe',
    age: 30
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  // The obj object and the arr array are both allocated in the heap memory.

//   When the obj object and the arr array are no longer being used, they will be garbage collected and the memory that they were using will be freed up.