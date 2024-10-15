// callback function example
// function multiply(x) {
//     return x*x
// }
// let a = 2

// function callbackEx(num, fn) {
//     let newNum = fn(num)
//     return newNum
// }
// let finalNum = callbackEx(a,multiply)
// console.log(finalNum);


// // for loop and array spreader
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// if (true) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }

// // Closures 
// // function outer() {
// //     var x = 10;
// //     function inner() {
// //         console.log(x);
// //     }
// //     x = 20;
// //     return inner;
// // }
// // var innerFunc = outer();
// // innerFunc();

// function outer() {
//     var x = 10;
//     function inner() {
//         var y = 5;
//         console.log(x + y);
//         x = 20;
//     }
//     return inner;
// }
// var innerFunc = outer();
// innerFunc();
// innerFunc();



// map, filter reduce method working
let a = [1, 2, 3]
let b = [1, 2, 3, 4, 5]

// map method working
function map(arr, fn) {
    let trans = []
    for (let i = 0; i < arr.length; i++) {
        trans[i] = fn(arr[i], i)
    }
    return trans
}

function add(num) {
    return num * 2
}

let final = map(a, add)
console.log("map working", final);

// map method use case
let result = b.map((a) => a * 5)
console.log(result, b);



// filter method working
function filter(arr, fn) {
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
let newar = filter(b)
console.log(newar);


// filter method use case 
let resultfilter = b.filter((w) => w > 3)
console.log(resultfilter);


// reduce method working 

function reduce(arr, fn) {
    let initialVal = 100
    for (let i = 0; i < arr.length; i++) {
        initialVal = fn(initialVal, arr[i])
    }
    return initialVal
}

function add(acc,sub) {
    return acc-sub
}

let resultReduce = reduce(b, add)
console.log("the reduced value is: ", resultReduce);

// reduce method use case
let resultreduce = a.reduce((acc,sub) => sub-acc, 0)
console.log(resultreduce)


