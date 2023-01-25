let num1 = -2.5
let num2 = 2.5
let none = 2
let x = 5
let y = 5
function abs () {
    if (num1 < 0){ 
        console.log(num1 = -num1)
    } else {
        console.log(num1)
    }
} 
abs ()
console.log (Math.abs(-2.5))
// 

function floor () {
    let result = num2 % none
    if (num2 > 0) {
        console.log (num2 - result)
    } if (num2 < 0){
        console.log (num2 + result)
    }
    
}
floor ()
console.log (Math.floor(2.5))

// 
function ceil () {
    let result = num2 % none
    if (num2 > 0) {
        console.log (num2 + result)
    } if (num2 < 0){
        console.log (num2 - result)
    }
    
}
ceil ()
console.log (Math.ceil(2.5))
// 

function trunc () {
    let result = num2 % none
    if (num2 > 0) {
        console.log (num2 - result)
    } if (num2 < 0){
        console.log (num2 - result)
    }
    
}
trunc ()
console.log (Math.trunc(2.5))

//
function round () {
    let result = num2 % none
    if (result >= 0.5) {
        console.log (num2 + result)
    } else if (result <= 0.5){
        console.log (num2 - result)
    }
    
}
round ()
console.log (Math.round(2.5))
// 

function pow () {
    console.log (x ** y)
}
pow ()
console.log (Math.pow(5, 5))


function sqrt () {
    console.log (4 ** 0.5)
}
sqrt ()
console.log (Math.sqrt(4))
