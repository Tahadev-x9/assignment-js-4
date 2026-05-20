// ASSIGNMENT JS 4



// 1 - VARIABLE [ LET , VAR , CONST]

// ANS1
// var         re-assign        block scope
// let         re-assign        block scope 
// const       not-reassign     function scope 

// ANS2
let userName = "hassan";
console.log(userName)

// ANS3
//  Error ata hai type error 

// ANS4
var a = 10
var a = 20
// output 20   bcz var declare kia ja skata hai  
console.log(a)

// ANS5
//  Const array 
//  array kai andr values change hosakti hai. 
// const arr = [1 , 2 ];
//   arr.push(3);

// ANS6
let name = "hassan";
let age = "21";
let city = "karachi ";

console.log("My name is hassan ans i live in karachi ");



//  2 - STRING METHODS

// ANS1
// .toUpperCase() → text ko CAPITAL mein convert karta hai.
// .toLowerCase() → text ko small letters mein convert karta hai.

// ANS3
let str = "javascript";    // OUTPUT JAVA 
console.log(str.slice(0, 4));

// ANS4
// .charAt()
// str.charAt(0)
// Indexing
// str[0]

// Difference:

// charAt() method hai.
// Indexing direct access hai.

// ANS5
// let user = "hAsAn";
// console.log(user.toLowerCase());

// ANS6
let paragraph = "My name is Hasan";
let words = paragraph.split(" ");    //  ['My', 'name', 'is', 'Hasan']
console.log(words);



// 3 - ARRAYS

// ANS1
// Array ek variable hota hai jo multiple values store karta hai.

// ANS2
let fruits = ["apple","banana","orange","mango","grapes"];
console.log(fruits);

// ANS3
// push()
// End mein element add karta hai.
// pop()
// End se element remove karta hai.

// ANS4
// ["a","z","c"]  splice mai mid sai value change or use hoti 

// ANS5
// let arr = [10,20,30,40];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);   // OUTPUT 10 40 

// ANS6 
let fruit = [["apple"],["banana","orange"]];     // ?
console.log(fruit[1][1]);



//  4 - ARRAY METHODS

// ANS1
// slice()	                           splice()
// Original array change nahi karta	  Original array change karta
// Copy/extract karta	               Add /remove karta

// ANS2
// let arr = ["A","B","C"];
// arr.splice(2,0,"Ali");        // ? 
// console.log(arr);

// ANS3
let arr = [1,2,3,4,5];
arr.splice(1,2);
console.log(arr);

// ANS4
// [2,3]

// ANS5
// shift()
// First element remove karta hai.
// unshift()
// Start mein element add karta hai.

// ANS6
let students = ["Ali","Hasan","Ahmed"];
let copy = students.slice();
console.log(copy);



// 5-OBJECT 

// ANS1
// Object related data ko key-value pairs mein store karta hai.

// ANS2
// let student = {
//   name: "Hasan",
//   age: 21,
//   email: "hasan@gmail.com"
// };

// ANS3
// Dot notation
// Dot notation
// user.name
// Bracket notation

// ANS4
// undefined

// ANS5
// let user = {
//   name: "Hasan"
// };
// user.city = "Karachi";
// console.log(user);

// ANS6
let user = {
  name: "Hasan",
  age: 21
};
console.log("My name is Hasan and my age is 21");


// 6- DATA  TYPES  

// ANS1
// Primitive data types:

// String
// Number
// Boolean
// Undefined
// Null

// ANS2
// Reference data types:
// Object
// Array
// Function

// ANS3
// undefined	             null
// Value assign nahi hui	Intentionally empty

// ANS4
// undefined

// ANS5
// typeof []      // object
// typeof {}      // object
// typeof null    // object

// ANS6
let isLoggedIn = true;
isLoggedIn = !isLoggedIn;
console.log(isLoggedIn);


// 7-IF ELSE CONDITION 

// ANS1
// if else decision making ke liye use hota hai.

// ANS2 
let num = 4;

if(num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}

// ANS3
let num2 = -5;
if(num2 > 0){
  console.log("Positive");
}else if(num2 < 0){
  console.log("Negative");
}else{
  console.log("Zero");
}

// ANS4
// A

// ANS5
let email = "admin@gmail.com";
let password = "123";

if(email === "admin@gmail.com" && password === "123"){
  console.log("Login Success");
}else{
  console.log("Invalid");
}

// ANS6
let age2 = 20;
let hasCNIC = true;

if(age2 >= 18){
  
  if(hasCNIC){
    console.log("You can vote");
  }

}



// 8 - SWITCH STATEMENT 

// ANS1
// Multiple conditions check karne ke liye switch use hota hai.

// ANS2
let day = "Monday";

switch(day){

  case "Monday":
    console.log("Start of week");
    break;

  case "Friday":
    console.log("Holiday");
    break;

  default:
    console.log("Normal Day");
}

// ANS3
let tab = "home";

switch(tab){

  case "home":
    console.log("Home Page");
    break;

  case "about":
    console.log("About Page");
    break;

  case "setting":
    console.log("Settings");
    break;

  default:
    console.log("Invalid Tab");
}

// ANS4
// Holiday

// ANS5
// Switch	                if-else
// Multiple exact values	Complex conditions
// Cleaner syntax	        More flexible

// ANS6
let num1 = 10;
let num3 = 5;
let operator = "/";

switch(operator){

  case "+":
    console.log(num1 + num3);
    break;

  case "-":
    console.log(num1 - num3);
    break;

  case "*":
    console.log(num1 * num3);
    break;

  case "/":
    console.log(num1 / num3);
    break;

  default:
    console.log("Invalid Operator");
}
