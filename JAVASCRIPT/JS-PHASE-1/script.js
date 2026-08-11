// console.log("Hello, World!");

// console.log("This is normal text");
// console.warn("This is a warning"); //Print a warning
// console.error("This is an error"); //Print an error
// console.table(['Rajat','Ram','Rahul'])

// Variables - containers which is use to store the data

// var a; // Declaration
// a = 10; // Intialisation
// console.log(a);

// var a = 10
// var b = 20
// console.log(a,b);
// console.log(a+b);

//Js is dynamic interpreted language and here you don't need to define the type

// let name = "Aman";         // string
// let age = 25;              // number
// let isStudent = true;      // boolean
// let car = null;            // null - "no car right now, intentionally"
// let job;                   // undefined - never assigned
// let id = Symbol("uid");    // symbol
// let bigNum = 12345678901234567890n; // bigint (note the 'n')

// console.log(typeof "hello");      // "string"
// console.log(typeof 42);           // "number"
// console.log(typeof true);         // "boolean"
// console.log(typeof undefined);    // "undefined"
// console.log(typeof null);         // "object"  ← famous bug in JS!
// console.log(typeof {});           // "object"
// console.log(typeof []);           // "object"  (arrays are objects)
// console.log(typeof function(){}); // "function"

// console.log("5" + 3);     // "53"   ← string concatenation
// console.log("5" - 3);     // 2      ← number subtraction
// console.log("5" * "2");   // 10
// console.log(true + 1);    // 2      (true becomes 1)
// console.log(false + 1);   // 1      (false becomes 0)
// console.log(null + 1);    // 1      (null becomes 0)
// console.log(undefined + 1); // NaN  (undefined becomes NaN)

// let name = prompt("What is your name?");
// console.log("Hello, " + name);

// let name = confirm("Are you a man?");
// console.log(name);

// let name = alert("Remember my name");
// console.log(name);

// <-- Conditional -->

// var age = Number(prompt('Enter your age'))
// if(age>=18) {
//     console.log("eligible"); 
// } else{
//     console.log("not eligible");  
// }
// console.log(typeof(age));

// var math = Number(prompt('Enter marks'))
// var phy = Number(prompt('Enter marks'))
// var bio = Number(prompt('Enter marks'))
// var avg = (math+phy+bio)/3
// console.log("Your average mark is: ",avg);
// if(avg>=85){
//     console.log("Eligible for scholership");
// } else {
//     console.log("No scholership");  
// }


// let marks = 75;

// if (marks >= 90) {
//     console.log("A grade");
// } else if (marks >= 75) {
//     console.log("B grade");
// } else if (marks >= 50) {
//     console.log("C grade");
// } else {
//     console.log("Fail");
// }

// truthy and falsy
// if(10) {
//     console.log("hello");   
// } else {
//     console.log("bye");
    
// }

//loop

// var num = Number(prompt('Enter Number'))

// var a = 1;
// while(a<=10){
//     console.log(num+' x '+a+' = '+num*a);
//     a++;
// }

// var a = 11
// do{
//     console.log(a);
//     a++;   
// } while(a<10)

// do{
//     var pass = prompt('Enter password')
// }while(pass != '123')
// console.log('Welcome');
