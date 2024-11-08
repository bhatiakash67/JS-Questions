// spread operator

let spreadOne = [1, 2, 3, 4, 5, 6]
let spreadTwo = ["name", "age", "company", "height", "weight"]
// console.log(...spreadOne, ...spreadTwo);
let spreadMer = [44, 55, 66, ...spreadTwo]
// console.log(spreadMer);
let spreadThree = [spreadOne, ...spreadOne]
// console.log(spreadThree);

function spreadSum(x, y, z) {
    return x + y + z;
}
const numbers = [15, 2, 3];
console.log(spreadSum(...numbers));

let spreadOb1 = {
    vehicle: "car",
    age: "10"
}
let spreadOn2 = {
    type: "sedan"
}
letspreadObmer = {
    ...spreadOb1, ...spreadOn2, brand: "rouse"
}
console.log(letspreadObmer);

// overriding properties with spread 
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 };
console.log(mergedObj);

// eg.2
const isSummer = false;
const fruits = {
    apple: 10,
    banana: 5,
    ...(isSummer ? { watermelon: 30 } : {}),
};
console.log(fruits);


// rest operator
function restOp(...args) {
    console.log();

    console.log("rest arguments count:", arguments.length);
}
let restarr = [5, 6, 4, 3, 1, 56756]
restOp(...restarr)

// reverse a string
function revString(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}
let revStresult = revString("round face")
console.log(revStresult)

// spread operator
let ranstr = 'rounddaisy'
console.log(...ranstr);
let round = [1, 2]
let sq = [5, 6]
let tri = [...round, ...sq]
console.log(tri);

// rest operator
function restsum(a, b, ...args) {
    let total = 0
    console.log(total += a + b, args);
}
restsum(1, 2, 3, 4, 5, 6, 7)


// closure 
function outer() {
    function inner() {
        console.log(a);
    }
    var a = 15345345;
    return inner;
}
var close = outer();
close();

function outest() {
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    let c = 12;
    return outer;
}
let a = 100;
var close = outest()("Hi Closures");
close();


function outer() {
    let a = 10
    function inner() {
        console.log(this.a);
    }
    return inner
}
outer()()


//   pre and post increments 
let aincri = 1056
function incriadder() {
    for (let i = 0; i < 10; i++) {
        // block scoped 
        let abcd = 234
        // function scoped
        var bcde = 234
        console.log(++aincri);
    }
    // let variable is not defined because it is block scoped so it is not accessible outside the for loop block but var variable is because it is not block scoped, but instead it is function scoped so it is available ouside the loop block
    // console.log(abcd, bcde);
    return aincri
}
incriadder()

// this keyword
// console.log(this);
// function thistest() {
//     // console.log("normal function", this);
// }
// thistest()
// const aaa = () => {
//     console.log("arrow function", this)
// }
// aaa()

let aOb = {
    name: "ronaldo",
    age: 36,
    func: function () {
        console.log(this.name);
    }
}
aOb.func()


// promise 
// function getUserData(isSuccess) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isSuccess) {
//                 const user = {
//                     name: 'john', age: 25
//                 }
//                 resolve(user)
//             }
//             else {
//                 reject("Failed to fetch user data")
//             }
//         }, 5000)
//     })
// }
// getUserData(false)
//     .then((userData) => {
//         console.log("Data received: ", userData);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })

// leetcode question on setTimeout
// func takes - a function, array of args and time t as arguments.
// I have to return a function name - cancelFn, adn this will be invoked after a time of cancelTimeMs
function cancellable(fn, args, t) {
    const callFn = setTimeout(() => {
        fn(args)
    }, t)

    return function cancelFn(cancelTimeMs) {
        setTimeout(() => {
            clearTimeout(callFn)
        }, cancelTimeMs)
    }
}


// Array methods 
let testArr = [1, 2, 3, "four", "five", 6]
console.log("test rounding", Math.ceil(5.7));
testArr.sort((a, b) => a < b)
console.log(testArr[3].split(""));

// sum of squared array elements
function squareSum(...numbers) {
    let squaredArr = []
    let total = 0
    // let squaredArr = numbers.map((item) => item ** 2)
    // return squaredArr.reduce((accumulator, initialVal) => accumulator+initialVal, 0)
    for (let i = 0; i < numbers.length; i++) {
        squaredArr.push(numbers[i] ** 2)
        total += squaredArr[i]
    }
    return total
}
console.log(squareSum(1, 2, 3, 4, 5))

// 
function arrOp(num) {
    let str = num.toString(10)
    let reversedStr = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(Number(str[i]))
    }
    return reversedStr
}
console.log(arrOp(2345))

function findSmall(arr) {
    arr.sort((a, b) => a - b)
    return arr
}
console.log(findSmall([3, 2, 1, 5, 6]))

let names = [1, 2, 3, 4]
console.log(names.slice(1, -1));

function isPangram(string) {

}
isPangram('The quick brown fox jumps over the lazy dog')

// binary  to decimal with builtin method
let binary = '1101000'
let digit = parseInt(binary, 2)
console.log(digit);

// binary to decimal through iteration
const binaryArrayToNumber = arr => {
    let decimalValue = 0
    for (let i = 0; i < arr.length; i++) {
        decimalValue += arr[i] * Math.pow(2, arr.length - 1 - i)
    }
    return decimalValue
};
console.log(binaryArrayToNumber([1, 1, 1, 1]));

// binary to decimal with reduce
const binaryArrayToNumberred = arr => {
    return arr.reduce((accu, curr, index) => accu + curr * Math.pow(2, arr.length - 1 - index), 0)
};
console.log("reduce", binaryArrayToNumberred([0, 0, 0, 1]));

// repeat strings n times
function repeatStr(n, s) {
    let repeatedStr = ''
    for (let i = 1; i <= n; i++) {
        repeatedStr += s
    }
    return repeatedStr;
}
console.log(repeatStr(3, 'Hola'));

//   special casing of sentences
function specialCasing(string) {
    let strArr = string.split(' ')
    let updatedStr = ''
    for (let i = 0; i < strArr.length; i++) {
        let cased = strArr[i][0].toUpperCase() + strArr[i].slice(1)
        updatedStr += cased + ' '
    }
    return updatedStr.trim()
}
let str = "How can mirrors be real if our eyes aren't real"
console.log(specialCasing(str));

// console.log(this);

// function thisCheck() {
//     console.log(this);
// }
// thisCheck()
// const red = () => {
//     console.log('this context', this);
// }
// red()


function highAndLow(numbers) {
    let numberStr = numbers.split(' ').map(Number).sort((a, b) => a - b)
    return numberStr[numberStr.length - 1] + ' ' + numberStr[0]
    // .map(Number)    
    // let max = numberStr[0]
    // let min = numberStr[0]
    // for (let i = 0; i < numberStr.length; i++) {
    //     if (numberStr[i] > max) {
    //         numberStr[i]=max 
    //     } if (numberStr[i] < min) {
    //         min = numberStr[i]
    //     }
    // }
    return `${max} ${min}`
}
console.log(highAndLow('5 1 2 3 4'));

function findShort(s) {
    let a = s.split(' ')
    let shortedWord = a[0]
    // for (let i = 0; i < a.length; i++) {
    //     if (shortedWord.length > a[i].length) {
    //         shortedWord = a[i]
    //     }
    // }
    for (const word of a) {
        if (shortedWord.length > word.length) {
            shortedWord = word
        }
    }
    return shortedWord
}
console.log(findShort("bitcoin take over the world we maybe who knows perhaps"));


function persistenceForOf(num) {
    let count = 0
    while (num >= 10) {
        let product = 1
        for (const char of num.toString()) {
            product *= +char
        }
        num = product
        count++
    }
    return count
}
console.log('with while and for...of', persistenceForOf(999))

function persistence(num) {
    let count = 0
    while (num >= 10) {
        let product = 1
        let numStringed = num.toString()
        for (let i = 0; i < numStringed.length; i++) {
            product *= +numStringed[i]
        }
        num = product
        count++
    }
    return count
}
console.log('with while and for', persistence(999))

function shortedPersistence(num) {
    let count = 0
    while (num >= 10) {
        num = num.toString().split('').reduce((a, b) => a * +b)
        count++
    }
    return count
}
console.log('shorted persistence', shortedPersistence(999));

function getSum(a, b) {
    if (a === b) return a
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    let sum = 0
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum
}
console.log(getSum(5, -1));


let testNew = [1, 2, 3, 4, 5]
let output = testNew.map((a) => Number(a.toString(2)))
console.log(typeof (output[0]));

let aa = 10
let bb = ++aa
console.log('pre', aa, bb);

let ccd = 10
let dddd = ccd++
console.log('post', ccd, dddd);

let f = 21
console.log(f++, ++f);

function deleteNth(arr, n) {
    let counter = {}
    let result = []
    for (let element of arr) {
        counter[element] = (counter[element] || 0) + 1
        if (counter[element] <= n) {
            result.push(element)
        }
    }
    // for (let i = 0; i < arr.length; i++) {
    //     let element = arr[i]
    //     counter[element] = (counter[element]||0) +1
    //     if(counter[element]<=n) {
    //         result.push(element)
    //     }
    // }
    return result
}
console.log('remove', deleteNth([1, 1, 1, 2, 3, 4, 4, 3], 2));


function grade(...args) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += args[i]
    }
    let average = sum / arguments.length
    let grade
    if (average >= 90 && average <= 100) {
        grade = 'A'
    } else if (average >= 8090 && average < 90) {
        grade = 'B'
    }
    else if (average >= 70 && average < 80) {
        grade = 'C'
    }
    else if (average >= 60 && average < 70) {
        grade = 'D'
    } else if (average >= 0 && average < 60) {
        grade = 'F'
    }
    return grade
}
console.log(grade(95, 90, 93));


let v = [1, 2, 3, 4, 5]
let x = [1, 2, 3, 4, 5, 6]
// reverse an array out of place
function reverseArrInPlace(arr) {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}
console.log('Reversed array out of place:', reverseArrInPlace(x));

// reverse an array in place
function reverseInPlace(arr) {
    if (arr.length % 2 == 0) {
        for (let i = 0; i <= (arr.length - 1) / 2; i++) {
            let ele = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = ele
        }
    } else {
        for (let i = 0; i <= arr.length / 2; i++) {
            let ele = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = ele
        }
    }
    return arr
}
console.log('Reversed array in place:', reverseInPlace(x));