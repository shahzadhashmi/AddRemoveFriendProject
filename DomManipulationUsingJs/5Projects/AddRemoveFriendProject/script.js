let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let flag = 0;

// For two buttons

// let addFriend = document.querySelector("#add").addEventListener("click", function() {
//     istatus.innerHTML = "Friends";
//     istatus.style.color = "green";
// });

// let removeFriend = document.querySelector("#remove").addEventListener("click", function() {
//     istatus.innerHTML = "Stranger";
//     istatus.style.color = "red";
// });


// Use Only One Button

btn.addEventListener("click", function() {
    if (flag === 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        flag = 1;
    }else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
});
