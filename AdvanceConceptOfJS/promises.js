// Promise:: We use Promise() to run code in future. 
// it has three states 
// Pending
// Resolve
// Reject
// Promise(()=> {}), promise accepts function that contain res and rej state and promise return the answer/response. 

// Promise() use .then() to run pending state
// If we get response is resolve state we'll use .then()
// If we get response is reject state we'll use catch()
// 

// Example 1:: 

// let answer = new Promise((res, rej)=> {
//     if (true) {
//         return res();
//         // console.log("Meri lala menu dydy");
//     } else {
//         return rej();
//         // console.log("Meri lala tu ly ly");
//     }
// });

// answer
// .then(()=> {
//         console.log("Resolve ho gia tha");
//     })
//     .catch(()=> {
//         console.log("Reject ho gia tha");
//     });

// Example 2:

// let ans = new Promise( (res, rej ) => {
//     	return setTimeout(() => res("Chall Giaaa Promiseeeeeeee"), 200);
// });

// ans.then(function (data) {
//     console.log(data);
// });


// Example 3:

// We have a scenario 
// go home
// have lunch
// play video game
// do homework
// sleep

let dailyActivity = new Promise((res, rej) => {

    const errorOccurred = false;

    if (errorOccurred) {
        rej("Couldn't go home");
    } else {
        return res("go home");
    }
});

let lunch = dailyActivity.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {

        const errorOccurred = false;
        if (errorOccurred) {
            rej("Lunch not available");
        }else {
            return res("Have Lunch");
        }
    });
}).catch((error) => {
    console.log(`${error}`);
});

let game = lunch.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        const errorOccurred = false;
        if (errorOccurred) {
            rej("Couldn't play video game");
        }else {
            return res("Play Video Game");
        }
    });
}).catch((error) => {
    console.log(`${error}`);
});

let homework = game.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        const errorOccurred = false;
        if (errorOccurred) {
            rej("Couldn't do homework");
        }else {
            return res("Do Homework");
        }
    });
}).catch((error)=> {
    console.log(`${error}`);
});

let sleep = homework.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        const errorOccurred = false;
        if (errorOccurred) {
            rej("Couldn't Sleep");
        }else {
            return res("Sleep");
        }
    });
})

sleep.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(`${error}`);
});