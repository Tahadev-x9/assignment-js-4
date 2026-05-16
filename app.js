alart("hello world")


// nsole.log(hello world )


// ali fuckjer


// jango mango  


let numArr = [1,2,3,4,5]

// let pushReturn  = numArr.push(6,7,8)
// console.log(pushReturn)                 // 1 saui 8 tak 


//  let popRetuurn = numArr.pop(0)
// console.log(popRetuurn)          // 5 ko uraaa dia




// // let strArr = ["kuuvhi" , "random " , "xyz "]
// //  numArr.push(6,7,8)
// // numArr.push(0)
// // numArr.shift(0)

// console.log("numArr " , numArr)
// // // console.log("string array " , strArr)




// jo method array kai hain sirf array par c hltai hai .
// jo method string kai hongy wo sirf string par chltai hai .
   

// slice      // pehla  or thirsa gyab 
let fruits = ["apple", "banana", "orange", "mango"];
let result = fruits.slice(1,3);
console.log(result);
console.log(fruits);




let strArr = ["kuuvhi" , "random " , "xyz " , "ffaaah "]

// let copyStrHalfArr = strArr.slice()


// strArr.slice(0,1,2,3)
// console.log(strArr)

let spliceReturn = strArr.splice(1, 2)
console.log("splice return", spliceReturn)


// push / pop
  
// push kia karta haii ...... array kaki last sai element ko add karta hai
// pop  kia karta hia .... array kai lasr sai element ko remove karta hai



// shift / unshift 

// unshift   kia karta hia .... array kai start  sai element ko   add karta hai  
// shift kia karta hia .... array kai  start sai element ko remove karta hai


// slice / splice

// slice() array ka kuch part copy/extract karta hai bina original array ko change kiye.    [ start or end ko target karta hai]
// splice array mein elements add, remove, ya replace karta hai mid mai sai aur original array ko change karta hai.
//  start deletecount new item 


// add wala hai 
// let fruits = ["apple", "orange"];
// fruits.splice(1,0,"banana");
// console.log(fruits);


// replace wala
// let fruits = ["apple", "banana", "orange"];
// fruits.splice(1,1,"mango");
// console.log(fruits);


//function 


// function sum(a, b){
//     return a + b
// }
// let result = sum(12,13)
// console.log(result);





// FUNCTION TOPIC 



// function foo(){
//     return "hello world"
// }

// let fooReturn = foo()
// console.log(fooReturn , " kuch bhioiii ")



// function defination 
//  function block of code hai tab hi chaltai hai jab app inchy call karty 


// call ko agar chalana hai to call karna lazmi hai 






 
//   ARGUMENT AND PARAMETER 


// argument esa arean jahan sai value bheji jayegiii 
// parameter esa area jahan sai value recive ki jayeeegi 

                  // parameter
function substract(n1 ,n3){
  console.log("result " , n1- n3);
}
substract(10 , 5  )  // argument  
