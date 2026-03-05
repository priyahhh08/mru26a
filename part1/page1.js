// variables let, var, const

let a = 10
console.log(a)
a = 11
console.log(a)

var b = 20
console.log(b)
b = 21
console.log(b)

const c = 30
console.log(c)
c = 31 
console.log(c)


//REASSIGNMENT IS POSSIBLE WITH LET AND VAR BUT NOT WITH CONST
//REDECLARATION IS POSSIBLE WITH VAR BUT NOT WITH LET AND CONST

// let a = 12 // error: Identifier 'a' has already been declared
// var b = 22 // no error, but it will overwrite the previous value of b
// const c = 32 // error: Identifier 'c' has already been declared


//**hOISTING
//1.vAR KEYWORD
console.log(x) // undefined
var x = 5
console.log(x) // 5
//IT RUNS WITHOUT ERROR BECAUSE OF HOISTING, BUT THE VALUE OF x IS UNDEFINED UNTIL IT IS ASSIGNED
 var d  
 console.log(d) 
 d = 10 
 console.log(d) 

//2. LET AND CONST KEYWORD
console.log(y) // ReferenceError: Cannot access 'y' before initialization
let y = 10
console.log(y) // 10

let z 
console.log(z) // undefined
z = 10

//3.Conrst KEYWORD
console.log(w) // ReferenceError: Cannot access 'w' before initialization
const w = 10
console.log(w) // 10    