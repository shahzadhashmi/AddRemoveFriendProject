//  we use foreach only on array 

// Examples 

let arr = [1,2,3,4,5,66,88,77,744];

// arr.forEach( (val)=> {
//     console.log(val+5);
// });

// forEach is a method commonly used to iterate over elements in an array or items in a collection, applying a function to each item. Here's a real-life example of how forEach might be used:

// Example: Processing a List of Items

// Suppose you are building a shopping cart application, and you want to calculate the total price of items in the cart. You have an array of items, and you want to apply a calculation to each item to determine its price. Here's how you could use forEach for this:

const cartItems = [ 
    { name: 'T-Shirt', price: 15.66},
    { name: 'Jeans', price: 29.55},
    { name: 'Sneakers', price: 24.66},
    { name: 'Hat', price: 4.66},
];

// Initialize the total price

let totalPrice = 0;

// cartItems.forEach( (item)=> {
//     totalPrice += item.price;
//     console.log("Result after adding value in previous value: ", totalPrice);
// });

// console.log("Total Price: $" + totalPrice.toFixed(2));


// Certainly, here are some more detailed examples of how the forEach method can be used in various real-life scenarios.

// 1. Logging Data:

// Suppose you have an array of log entries, and you want to print each entry to the console. You can use forEach to iterate through the log entries and log each of them:

const logEntries = [ 
    "User logged in",
    "Data saved successfully",
    "Error: Connection lost",
    "User logged out",
];

// logEntries.forEach( (entry)=> {
//     const timeStamp = new Date().toLocaleString();
//     console.log(timeStamp + " : " + entry);
// });

// function logMessage(message) {
//     const logEntries = document.getElementById('log-entries');
//     const logEntry = document.createElement('div');
//     logEntry.textContent = message;
//     logEntries.appendChild(logEntry);

//     logEntries.scrollTop = logEntries.scrollHeight;
// }

// logMessage("User logged in");
// logMessage("Data saved successfully");
// logMessage("Error: Connection lost");
// logMessage("User logged out");


// 2. Updating User Profiles:

// Imagine you have an array of user profiles, and you want to update the profiles by adding a prefix to each user's name. You can use forEach to iterate through the profiles and make the updates:

// const userProfiles = [ 
//     {name: 'Alice', age: 30, gender: 'male'},
//     {name: 'Bob', age: 30, gender: 'male'},
//     {name: 'Jenny', age: 30, gender: 'female'},
//     {name: 'Lena', age: 30, gender: 'female'},
// ];

// userProfiles.forEach( (user)=> {
//     if (user.gender === "male" ){
//         console.log(user.name = "Mr." + user.name);
//     } else {
//         console.log(user.name = "Mrs." + user.name);
//     }
// });

// 3. Processing Form Data:

// In a web application, when a user submits a form with multiple input fields, you can use forEach to collect and process the form data:

// const formData = new FormData(document.querySelector('form'));

// const formValues= {};

// formData.forEach((val, key)=> {
//     formValues[key] = val;
// });

// console.log(formValues);

// web page example
// document.getElementById('sample-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(this);
//     const formValues = {};

//     formData.forEach( (value, key)=> {
//         formValues[key] = value;
//     });

//     const formDataElement = document.getElementById('form-data');
//     formDataElement.textContent = JSON.stringify(formValues, null, 2);
// });

// 4. Validating User Input:

// You can use forEach to validate user input in an array and check if all the elements meet specific criteria. For example, ensuring all numbers in an array are positive:

// const numbers = [1,-5,45,11,-29,55];
// let allPositive = true;

// numbers.forEach( (number)=> {
//     if(number < 0) {
//         allPositive = false;
//     }
// });

// console.log("All Numbers are Positive: ", allPositive);

// 5. Deleting Inactive Users:

// In a user management system, you can use forEach to filter and remove inactive users from an array of user objects:

const users = [
    { id: 1, name: "Alice", active: true},
    { id: 2, name: "Bob", active: false},
    { id: 3, name: "Charlie", active: true},
];

const activeUsers = [];

users.forEach( (user)=> {
    if (user.active) {
        activeUsers.push(user);
    }
});

console.log(activeUsers);
