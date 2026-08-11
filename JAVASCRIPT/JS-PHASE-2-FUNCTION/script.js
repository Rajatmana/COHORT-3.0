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

var b = function(){          //First class function, This is a function expression
    console.log('Hello guys');   
}
b()

var c = ()=>{
    console.log('Hii guys');
}
c(); 