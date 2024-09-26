// callback function example
function multiply(x) {
    return x*x
}
let a = 2

function callbackEx(num, fn) {
    let newNum = fn(num)
    return newNum
}
let finalNum = callbackEx(a,multiply)
console.log(finalNum);


// for loop and array spreader
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
if (true) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}

// Closures 
// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//     }
//     x = 20;
//     return inner;
// }
// var innerFunc = outer();
// innerFunc();

function outer() {
    var x = 10;
    function inner() {
        var y = 5;
        console.log(x + y);
        x = 20;
    }
    return inner;
}
var innerFunc = outer();
innerFunc();
innerFunc();