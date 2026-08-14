// function abc() {
//     console.log("Hello");
// }
// abc();

// function walk() {
//     console.log("walking");  
// }
// walk()

// function greet(a) { //a is a parameter
//     console.log('Good morning', a);
// }
// greet(5) // 5 is an argument
// greet()
// greet('Rajat')

// function add(a, b) {
//     console.log(a+b);  
// }
// add(5,6)

// function greet(user, age) {
//     console.log('Good morning' , user);
//     if(age>=18) {
//         console.log('Allowed');
//     } else {
//         console.log('Not Allowed');  
//     }
// }
// greet('Rajat', 22)

// var b = function(){          //First class function, This is a function expression
//     console.log('Hello guys');   
// }
// b()

// var c = ()=>{
//     console.log('Hii guys');
// }
// c(); 

// var c2 = (a,b) => console.log('Hello guys',a,b );
// c2('Rajat', 22)


// var c2 = a => console.log('Hello guys',a );
// c2('Rajat')

// aaa('Rajat') // hoisting in function is possible
// function aaa(a) {
//     console.log("hello", a);  
// }

// bbb('Rajat') // but for an function expression hoisting is not possible
// var bbb = function(a) {
//     console.log(a); 
// }

// //IIFE- Immidately Invoked function expression
// //it will call immidiately
// (function(){
//     console.log("This is iife");
// })()  

// (()=>console.log('hello'))()//valid


// function aa(a){
//     // console.log('hello');
//     return 'Rajat'
// }
// console.log((aa())); //hello undefined

// var a = ()=>console.log("Hello"); //valid
// a();
// var b = ()=> return "hello"; //invalid
// b()
// var c = ()=> "hello"; //valid
// c()

// //pure functions
// function add(a,b) {
//     return a+b;
// }
// console.log(add(2,3))
//impure functions
// var a = 10
// function abc() {
//     a++;
//     return a
// }
// console.log(abc());
// console.log(abc());
// console.log(abc());

//  

// function sum(...numbers) {
//     let total = 0;
//     for (let n of numbers) {
//         total += n;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));           // 6
// console.log(sum(1, 2, 3, 4, 5, 6));  // 21

// function hero() {
//     console.log('Hero function');
// }
// function main(a) {
//     console.log('main function');
//     console.log(a); 
//     a() // this is hero function   //callback
// }
// main(hero)

// function footpath(a){
//     console.log('Footpath width ',a);
// }
// function mainroad(wid,cb) {
//     console.log('Main road width ', wid);
//     // console.log(cb);
//     cb(wid/10)
// }
// mainroad(80,footpath)

// first class function - feature of function


// function parent() {
//     console.log('I am parent');
    
//     function child(){
//         console.log('I am child');
//     }
//     return child
// }
// var ans = parent()
// ans()
//parent()()