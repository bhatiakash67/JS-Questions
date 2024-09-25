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