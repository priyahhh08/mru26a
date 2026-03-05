//Primitive data types
let a = 10 //number
let name = "priya" //string
let flag = true //boolean
let b = null //null
let c = undefined //undefined
let num = 6857293659 //bigint
let sym = Symbol("id") //symbol

//Non-primitive data types (or) reference data types
const student = {
    nem:"John",
    age: 20
}
console.log(student) // {name: "John", age: 20}
const s1 = student
console.log(s1) // {name: "John", age: 20}
student.age = 21
console.log(s1) // {name: "John", age: 21}
//because s1 is a reference to the same object in memory as student, any changes made to the student object will also be reflected in s1.