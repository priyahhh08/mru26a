function greet(){
    console.log("hello world")
}
greet()
greet()
greet()



// function with parameters and arguments
function greet(name){ //parameter which is a variable that holds the value passed to the function
    console.log(`hello ${name}`)
}
greet("priya") //argument which is the value passed to the function when it is called



//return statement
function add(a,b){
    return a+b //return statement which is used to return a value from the function
}
const result = add(5,10) //storing the return value of the function in a variable
console.log(result)



//default parameters
function greet(name = "priya"){
    console.log(`hello ${name}`) 
}
greet() //if no argument is passed, the default value of the parameter will be used
greet("john") //if an argument is passed, it will override the default value of the parameter



//function with more arguments than parameters
function add(a,b){
    console.log(add)
}
add(4,5,6)//if more arguments are passed than the parameters defined in the function, the extra arguments will be ignored



//rest parameters
function add(...numbers){ //rest parameter which is used to represent an indefinite number of arguments as an array
    console.log(numbers)
}
add(1,2,3,4,5) //the rest parameter will collect all the arguments passed to the function and store them in an array



//arguments object
function add(){
    console.log(arguments) //arguments object which is an array-like object that contains all the arguments passed to the function
}
add(1,2,3,4,5) //the arguments object will contain all the arguments passed to the function 



//iify (immediately invoked function expression) which is a function that is executed immediately after it is defined   
(function greet(){
    console.log("hello world")
})() //the function is defined and immediately invoked using the parentheses at the end 
