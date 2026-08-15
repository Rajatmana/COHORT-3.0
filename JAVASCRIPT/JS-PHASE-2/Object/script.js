// var obj = {
//     name: 'Rajat',
//     age: 22,
//     city: 'Kolkata',
//     isSingle: true
// }
// console.log(obj.name); //Read
// obj.marks = 90 //Create
// console.log(obj);
// obj.marks = 95 //Update
// console.log(obj.marks);
// delete obj.isSingle; //Delete
// console.log(obj);

// console.log(Object.keys(obj)); // Return keys
// console.log(Object.values(obj)); //Return values


// var name = prompt('Enter Name')
// var age = prompt('Enter age')
// var city = prompt('Enter city')

// var obj = {name,age,city}
// console.log(obj);

// var obj = {
//     name: 'Siri',
//     ram: '200mb',
//     age: 10,
//     skills: ['search','speak','advice'],
//     creator:{
//         name:'apple',
//         age:20,
//         isGood: true
//     },
//     sayHi: function(){
//         console.log('Hello siri');
//     }
// }
// console.log(obj.sayHi()); // functions made in objects called methods

// Object.seal(obj) //can not create or delete value but update is possible
// Object.freeze(obj)//update also not possible

//Deep copy
// var str = JSON.stringify(obj)
// var copy = JSON.parse(str)

//Distructuring
// var arr = [11,22,33,44,55]
// var[a,b,...c] = arr //Rest Operator
// var arr2 = [...arr] //Spread operator
// // var[...a,b] = arr //error

// var obj = {
//     name: 'Rajat',
//     batch: 'cohort3',
//     age: 22
// }
// var {age} = obj