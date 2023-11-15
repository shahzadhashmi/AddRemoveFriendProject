//  difference between var let and const
// these variables mainly have 3 differences
  
// 1: var used is es5 and let and const used in es6

// 2: var adds itself into window object/browser but let and const doesn't

    var a =12; // to check write window in browser console

    let b= 12; // to check write window in browser console

// 3: var has function scoped and let and const has braces scoped

// e.g: var 

function abc() {
    for (var i=0; i<12; i++) {
        console.log("i: "+ i);
    }
    console.log("this will print this i value as well: ",i);
}

abc();

// e.g: let and const 

function abcd() {
    for (let i=0; i<12; i++) {
        console.log("i: "+ i);
    }
    console.log("this will not print the i value shows error: ",i);
}

abcd();