//Arithmetic Operators
console.log(10+2) // 12
console.log(10-2) // 8
console.log(10*2) // 20
console.log(10/2) // 5
console.log(10%3) // 1
console.log(10**2) // 100

//Comparison Operators
console.log(10 > 5) // true
console.log(10 < 5) // false
console.log(10 >= 5) // true
console.log(10 <= 5) // false
console.log(10 == "10") // true
console.log(10 === "10") // false
console.log(10 != 5) // true
console.log(10 !== "10") // true

//Assignment Operators
let a = 10
a += 5 // a = a + 5
console.log(a) // 15
a -= 3 // a = a - 3
console.log(a) // 12
a *= 2 // a = a * 2
console.log(a) // 24

//Logical Operators
console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false
console.log(true || false) // true
console.log(false || false) // false
console.log(!true) // false
console.log(!false) // true

//Unary Operators
let x = 10
console.log(-x) // -10
console.log(+x) // 10
console.log(++x) // 11
console.log(--x) // 10
x++ // x = x + 1
console.log(x) // 11
x-- // x = x - 1
console.log(x) // 10

//Ternary Operator
let z = 10
z>=20? console.log("z is greater than or equal to 20") : console.log("z is less than 20") // z is less than 20
//IF z is greater than or equal to 20, then it will print "z is greater than or equal to 20", otherwise it will print "z is less than 20"

let y = 10
y>20 && console.log("hello") // nothing will be printed because the condition is false
y<20 && console.log("hello") // hello will be printed because the condition is true
