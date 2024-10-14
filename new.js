// spread operator

let spreadOne = [1, 2, 3, 4, 5, 6]
let spreadTwo = ["name", "age", "company", "height", "weight"]
// console.log(...spreadOne, ...spreadTwo);
let spreadMer=[44,55,66,...spreadTwo]
// console.log(spreadMer);
let spreadThree = [spreadOne, ...spreadOne]
// console.log(spreadThree);

function spreadSum(x, y, z) {
    return x + y + z;
}
const numbers = [15, 2, 3];
console.log(spreadSum(...numbers));

let spreadOb1={
    vehicle:"car",
    age:"10"
}
let spreadOn2={
    type:"sedan"
}
letspreadObmer={
    ...spreadOb1, ...spreadOn2, brand:"rouse"
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
function restOp(...args){
    console.log();
    
    console.log("rest arguments count:",arguments.length);
}
let restarr=[5,6,4,3,1,56756]
restOp(...restarr)
