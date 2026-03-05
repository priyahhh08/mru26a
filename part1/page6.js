"use strict"
a = 10
console.log(a) // Uncaught ReferenceError: a is not defined

"use strict"
var a = 10
console.log(a) // 10
"use strict"
let a = 10
console.log(a) // 10

function add(a,a){
    console.log(a+a)
}
add(4,5)// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

function add(a,b){
    console.log(a+b)
}
add(4,5) // 9


"use strict"
let a = 010
console.log(a) // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
