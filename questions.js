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

function multiply(num) {
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
    return acc + sub
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
        if (n in cache) {
            console.log("the cache storage", cache);
            return cache[n]
        }
        let result = fab(n - 1) + fab(n - 2)
        cache[n] = result
        console.log("the cache after storing", cache);
        return result
    }
}
let dis = memo()
console.log("fibonacci", dis(5));

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
console.log(mapWoking(mapTestArr, multiply));


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
console.log(beReduced(mapTestArr, add, 0));


// settimeout question
// let timeoutId = setTimeout(() => dumb(), 5000)

// function dumb() {
//     console.log("You are a dum dum")
// }
// const newTimer = setTimeout(() => clearTimeout(timeoutId), 6000)

// // setInterval question 
// let intervalId = setInterval(() => {
//     console.log("red")
// }, 1000);
// function intervalstopper() {
//     setTimeout(() => {
//         clearInterval(intervalId)
//     }, 10000);
// }
// intervalstopper()

// score calculations kata
function points(games) {
    let team1Points = 0
    for (let i = 0; i < games.length; i++) {
        let [team1Score, team2Score] = games[i].split(":").map(Number)
        if (team1Score > team2Score) {
            team1Points += 3
        } else if (team1Score === team2Score) {
            team1Points += 1
        }
    }
    return team1Points
}
let newArrr = ["1:2", "2:1", "5:3", "2:2", "3:3", "3:4"]
console.log("Total points of Team A are:", points(newArrr));


// Descending order of number
function descendingOrder(n) {
    let changedNum = n.toString().split('')
    let sortedNum = changedNum.sort((a, b) => b - a)
    let transString = parseInt(sortedNum.join(''))
    console.log(typeof (transString));
    // let changedNum =parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
    return transString
}
console.log("largest number is:", descendingOrder(1234));

// simple search bar 
let searchbarArr = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan"]
let search = document.getElementById("searchBar")
let list = document.querySelector('.nameList')
let btn = getElementById("search")

list.textContent = searchbarArr