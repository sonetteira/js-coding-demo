// function examples

// declare a function
function hello() {
    console.log('Hello, world')
}

// call a function
hello()

//sum function returns the sum of 2 parameters
function sum(a, b) {
    return a + b
}

//assign the returned value to a variable
let c = sum(4, 10)

//or use the returned value directly
console.log(sum(10, 4))

function subtract(a, b) {
    return a - b
    let g = a * b //this code is unreachable
}

function divide(a, b) {
    if(b == 0) {
        //stop here
        return
    }
    return a / b
}

//multiply function returns the product of two arguments
function multiply(a = 1, b = 1) { // both arguments default to 1 if missing from the function call
    console.log('mutiply a:', a, ', b:', b, ', a*b=', a*b)
    return a * b
}

let m1 = multiply(4, 2)
let m2 = multiply(5)
let m3 = multiply()


// different ways to declare a function

// function declaration
function circleCircumference1(radius) {
    return 2 * Math.PI * radius
}
let circ = circleCircumference1(6.5)

// function expression
const circleCircumference2 = function(radius) {
    return 2 * Math.PI * radius
}
circ = circleCircumference2(4.99)

// 2 arrow functions
// these 2 do the same thing
const circleCircumference3 = (radius) => { 
    return 2 * Math.PI * radius
}
const circleCircumference4 = radius => 2 * Math.PI * radius;


// call a function
console.log(circleCircumference3(2));

// anonymous function
//do this immediately
(function () {
    console.log("anonymous function")
})();

//anonymous arrow function
(() => console.log("anonymous arrow function"))();

// calback function example
function someMath(a, b, callback) {
    let x = a - b + a * a ** b
    callback(x)
}

function moreMath(a) {
    let x = Math.log(a)
    console.log(x)
}

someMath(10, 17, moreMath)