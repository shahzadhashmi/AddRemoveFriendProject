// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of the parent function. Callbacks are commonly used to handle asynchronous operations, such as reading files, making network requests, and handling user interactions. They are a fundamental concept in JavaScript, particularly for dealing with events, timers, and asynchronous tasks.

// syntax 

// function parentFunction(callback) {
//     console.log("Parent Function waiting for callback to run");

//     // calling callback here in parent
//     callback();
// }

// function myCallback() {
//     console.log("This is the callback function that was passed into the parent function.");
// }

// parentFunction(myCallback);


// 1: Event Handling:
// Callbacks are often used to handle events in web development. For example, when a button is clicked, a callback function can be triggered to perform some action.

// const button = document.getElementById("myButton");

// function handleClick() {
//     console.log("Button Clicked");
// }

// button.addEventListener("click", handleClick);

// 2: SetTimeOut()/ setTimeInterval()

// this will run only 1 time after 3 seconds 
// const timeOut = setTimeout( ()=> {
//     console.log('Hello from setTimeout');
// }, 3000 );

// clearTimeout(timeOut); 

// this will continue running after every 5 seconds unless and until  u explicitly stops it
// const intervalId = setInterval(() => {
//     console.log('Tick Tack!')
// }, 5000);

// clearInterval(intervalId);


// 3: Iterating over array
const array = [1,2,3,4,5];

array.forEach( (element) => {
    console.log(`I'm looping through ${element}`);
});