//function keyword first (most common)
function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("Seth")
greet(12)
greet(true)
greet()

function multiply(a, b) {
    return a * b;
}

let twoThingsMultiplied = multiply(5, 5)
console.log(twoThingsMultiplied)

function printMultTable(number) {
    for(let i = 1; i <= 10; i++) {
        let result = multiply(number, i);
        console.log(`${i} x ${number} = ${result}`)
    }
}

printMultTable(5)

//function keyword stored in a variable

let add = function(a, b) {
    return a + b;
}

let addedNums = add(5, 5)
console.log(addedNums)

//anon function (function without a name) / arrow notation

let add2 = (a, b) => a + b;

let addedNums2 = add2(5, 5)