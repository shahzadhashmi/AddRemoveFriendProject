// Async Await :: 
// Jab b koi esa function jisme hum async code likhain, kiun k async code ha tu promises ka istamal kar skty hain , jab uska answer aye ga humain then() lagana pry ga, us .then() ko na use karain us k lye async await ka istamal kia jata ha.

// Examples: 

// This code defines a function abcd that uses the Fetch API to make an HTTP request to the "Random User Generator" API (https://randomuser.me/api/). The function logs the raw response and the parsed JSON data from the API.

// Here's a step-by-step explanation of the code:

// function abcd() { ... }:

// Declares a function named abcd.
// fetch('https://randomuser.me/api/'):

// Initiates a network request to the specified URL using the Fetch API.
// This returns a Promise that resolves to the Response object representing the response to the request.
// .then((raw) => { console.log(raw); return raw.json(); }):

// Chains a then method to the Promise. This function takes the raw Response object as a parameter.
// Logs the raw response to the console.
// Calls the json() method on the Response object to parse the response body as JSON. This method also returns a Promise.
// .then((data) => { console.log(data); }):

// Chains another then method to the Promise. This function takes the parsed JSON data as a parameter.
// Logs the parsed data to the console.
// abcd();:

// Calls the abcd function, triggering the entire fetch operation.
// In summary, the abcd function fetches data from the "Random User Generator" API, logs the raw response, and then logs the parsed JSON data. The Fetch API is commonly used for making HTTP requests in JavaScript, and in this case, it is used to retrieve random user data from the specified API endpoint.
function abcd() {
    fetch(`https://randomuser.me/api/`)
        .then((raw) => {
            console.log(raw);
            return raw.json();
        })
        .then((data) => {
            console.log(data);
        })
}
// abcd();


// Now to avoid then(), we will use async await.

async function randomUserGenerator() {
    // use async to the most nearest function.
    // this await move this line from main stack to side stack for async execution and until the completion and return promise
    const randomUser = await fetch(`https://randomuser.me/api/`)
    // gives us raw data
    console.log(randomUser);
    // this await also move this from MS to SS, gives us new promise
    const jsonData = await randomUser.json();
    // gives us parsed data
    console.log(jsonData);
}

// randomUserGenerator();

// This code defines an async function named randomUserGenerator that uses the await keyword to simplify the handling of asynchronous operations when making an HTTP request to the "Random User Generator" API (https://randomuser.me/api/). The function logs the raw response and the parsed JSON data from the API.

// Here's a step-by-step explanation of the code:

// async function randomUserGenerator() { ... }:

// Declares an asynchronous function named randomUserGenerator.
// const randomUser = await fetch('https://randomuser.me/api/'):

// Uses the await keyword to pause the execution of the function until the fetch operation is complete.
// fetch returns a Promise that resolves to the Response object representing the response to the request.
// The await keyword extracts the resolved value (the Response object) from the Promise and assigns it to the variable randomUser.
// console.log(randomUser);:

// Logs the raw response (Response object) to the console. This will include information such as the HTTP status, headers, and the response body.
// const jsonData = await randomUser.json();:

// Uses the await keyword again to pause the execution until the json() method is complete.
// The json() method is called on the Response object to parse the response body as JSON. This method also returns a Promise.
// The parsed JSON data is assigned to the variable jsonData.
// console.log(jsonData);:

// Logs the parsed JSON data to the console. This will typically contain information about a randomly generated user.
// randomUserGenerator();:

// Calls the randomUserGenerator function, initiating the entire asynchronous operation.
// In summary, this code demonstrates the use of the async/await syntax to handle asynchronous operations more elegantly. It fetches data from the "Random User Generator" API, logs the raw response, and then logs the parsed JSON data. The await keyword simplifies the code by allowing you to write asynchronous code in a more synchronous style.

// Some Practical example of async await

// Example 1: Fetching Data from an API:
async function fetchData() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        // gives us raw data
        console.log(response);
        const parseData = await response.json();
        // gives us parsed data
        console.log(parseData);
    } catch (error) {
        console.error("Error!", error);
    }
}

// fetchData();

// Example 2:  Multiple API Requests:

async function fetchUserData() {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
        console.log("userResponse", userResponse);
        const userData = await userResponse.json();

        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
        console.log("Post Response", postResponse);
        const postData = await postResponse.json();

        console.log("User: ", userData);
        console.log("Posts: ", postData);
    } catch (error) {
        console.log("Error Fetching Data:", error);
    }
}

// fetchUserData();

// Example 3:  Promise-based Function with async/await:


