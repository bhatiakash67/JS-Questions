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


// for loop and array spreader
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// if (true) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i])
//     }
// }

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
function filter(arr) {
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

function add(acc, sub) {
    return acc - sub
}

let resultReduce = reduce(b, add)
console.log("the reduced value is: ", resultReduce);

// reduce method use case
let resultreduce = a.reduce((acc, sub) => sub - acc, 0)
console.log(resultreduce)


// memoization
function factorial(n, memo) {
    memo = memo || {};
    if (n in memo) return memo[n];
    if (n <= 1) return 1;

    return memo[n] = n * factorial(n - 1, memo);
}
console.log(factorial(5));

// fibonacci series through recursive memoization
function memo() {
    const cache = {}
    return function fab(n) {
        if (n <= 1) return 1
        if (n in cache) return cache[n]
        let result = fab(n - 1) + fab(n - 2)
        cache[n] = result
        return result
    }
}
let dis = memo()
console.log("fibonacci", dis(30));

// reverse a string 
function rev(str) {
    let revdStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revdStr += str[i]
    }
    return revdStr
}
console.log(rev("ound"))

// reverse an array
function revArr(arr) {
    let revdArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        revdArr.push(arr[i])
    }
    return revdArr
}
console.log(revArr([1, 2, 3, 4, 5, 6]));

// kata question on reversed array
const reverseSeq = n => {
    let revdArr = []
    for (let i = n; i > 0; i--) {
        revdArr.push(i)
    }
    return revdArr
};
console.log(reverseSeq(5));

// map method 
let mapTestArr = [1, 2, 3, 4, 5]
let newArr = mapTestArr.map((num, index) => num * 5)
console.log(newArr);

// map method through for loop
function mapWoking(arr, fn) {
    let transMapArr = []
    for (let i = 0; i < arr.length; i++) {
        transMapArr[i] = fn(arr[i])
    }
    return transMapArr
}
console.log(mapWoking(mapTestArr, addNew));

function addNew(n) {
    return n * 2
}

// filter method 
let filteredArr = mapTestArr.filter((val) => val > 2)
console.log(filteredArr);

// filter method working 
function howToFilter(arr) {
    let filterNew = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            filterNew.push(arr[i])
        }
    }
    return filterNew
}
let newFilteredArr = filter(mapTestArr)
console.log(newFilteredArr);


// reduce method 
let reducedArr = mapTestArr.reduce((accumulator, value) => accumulator + value, 50)
console.log(reducedArr);

// reduce method creation 
function beReduced(arr, fn, initialVal) {
    let accumulator = initialVal 
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i])
    }
    return accumulator
}