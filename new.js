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
    var c = 12;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        //   let a =10; 
        return inner;
    }
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
        let abcd=234
        // function scoped
        var bcde=234
        console.log(++aincri);
    }
    // let variable is not defined because it is block scoped so it is not accessible outside the for loop block but var variable is because it is not block scoped, but instead it is function scoped so it is available ouside the loop block
    // console.log(abcd, bcde);
    
    return aincri
}
incriadder()



// scope variety
{
    let defg=100
    var abcdert=10
}
console.log(abcdert, defg);
