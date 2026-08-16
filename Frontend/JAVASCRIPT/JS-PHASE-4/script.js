//this =>
// console.log(this);

// function abc() {
//     console.log(this);
// }
// abc()

// var obj = {
//     firstName: 'Rajat',
//     age: 22,
//     sayHi: function(){
//         console.log(this);
//     },
//     arrowfun: ()=>{
//         console.log(this);
//     }
// }
// obj.sayHi()
// obj.arrowfun()

// 'use strict'
// a = 10;
// console.log(a);

//  var obj = {
//     firstName: 'Rajat',
//     age: 22,
//     sayHi: function(){
//         this.firstName = 'Rajjo'
//         console.log(this.firstName);
//     }
// }
// obj.sayHi()

// var btn = document.querySelector('button')
// btn.addEventListener('click',function(){
//     console.log(this);
// })

// var obj = {
//   name: "Rajat",
//   getCompany: function () {
//     const company = {
//       name: "ABC",
//       greet: function () { //If i use arrow function here then it will print Rajat bcz arrow function dont have any lexical context
//         console.log(this.name);
//       }
//     }
//     company.greet()
//   }
// };
// obj.getCompany()


//----Function sharing----
// var std1 = {
//     name: 'Rajat',
//     getIntro: function(){
//         console.log(this.name);
//     }
// }
// var std2 = {
//     name: 'Rupam'
// }
// std1.getIntro.call(std2)

// var std1 = {
//     name: 'Rajat',
//     maths: 90,
//     computer: 80
// }
// var std2 = {
//     name: 'Rupam',
//     maths: 70,
//     computer: 79
// }
// var getIntro= function(){
//         console.log(this.name);
//     }
// var tellResult = function(){
//     console.log(`${this.name}, you got ${this.maths+this.computer}`);    
// }
// tellResult.call(std1)

// var s1 = {
//     name: 'Rajat',
//     getIntro:function(city, state){
//         console.log(`${this.name} ${city} ${state}`);
//     }
// }
// var s2 = {
//     name: 'Ram'
// }
// var s3 = {
//     name: 'Shyam'
// }
// s1.getIntro.call(s2,'kolkata','WB')
// s1.getIntro.apply(s2,['Jhansi', 'UP'])
// var out = s1.getIntro.bind(s3,'Bhopal','MP')
// out()

var arr = [10,20,30,40]
console.log(arr.__proto__);
