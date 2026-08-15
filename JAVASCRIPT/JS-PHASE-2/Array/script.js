// var a = [10,20,30,40,50]
// console.log(a);
// console.log(a[3]);
// a[4] = 'Rajat'
// console.log(a);


// var arr = [10,20.5,'Rajat',true,null]
// console.log(arr);

// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[-1]);
// arr[-1] = 90
// console.log(arr[-1]);


// let arr = [10,20,30,40,50,60]
// arr.push(99)
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(1)
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.splice(1,3) //remove elements
// console.log(arr);
// arr.splice(1,0,90,100,200)//add elements 90,100,200
// console.log(arr);

// var arr = [1,2]
// arr[9] = 100
// console.log(arr.length);

// var arr = [10,2.23,'lol', [11,22,33]]
// console.log(arr);
// console.log(arr[3][1]);

// var arr = [1,2,3,4,5,6]
// arr.reverse()
// console.log(arr);
// arr.sort()
// console.log(arr);
// arr.sort((a,b)=>a-b)
// arr.sort((a,b)=>b-a)
// console.log(arr);


// var arr = [10,20,30,40,'Rajat']
// for(let a=0; a<arr.length; a++) {
//     console.log(arr[a]);
// }
// for(value of arr){
//     console.log(value);
// }

// var arr = []
// for(let a=0; a<10; a++) {
//     arr.push(a+1)
// }
// console.log(arr);

// var arr = [10,20,30,40,'Rajat']
// var arr2 = arr.slice(1,3) 
// console.log(arr); //original unchanged
// console.log(arr2);

// var arr2 = [11,22,33,44]
// var arr3 = arr.concat(arr2)
// console.log(arr3);
// console.log(arr.includes(30));
// console.log(arr.indexOf(40));

// var str = 'Rajat Mana'
// var arr = str.split('')
// console.log(arr);

// var arrr = ['Rajat', 'Mana']
// var str = arrr.join(' ')
// console.log(str);

// var arr = [10,20,30,40,50]
// var arr2 = [...arr] // copying the arr with spread operator
// console.log(arr2);
// arr2.push(99)
// console.log(arr2);


//HOF - Higher Order Function
// var arr = [10,20,30,40,50]
// arr.forEach(function(e,idx){
//     console.log(e,idx);
// })
// var sum = 0;
// arr.forEach(function(e){
//     sum += e;
// })
// console.log(sum);
//Foreach does not return anything

// var arr2 = arr.map(function(e){
//     return e*2
// })
// console.log(arr2);
// var arr2 = arr.map(function(e){
//     return e*2
// })
// console.log(arr2);
//return a new array with every element

// var users = ['Rajat','Rupam','Ruma','Madhab']
// var fullUser = users.map(function(e){
//     return e+' Mana'
// })
// var fullUser = users.map(function(e){
//     return e.substring(0,3)
// })
// console.log(fullUser);


// var arr = [5,9,2,4,56,33,11]
// var arr2 = arr.filter(function(e){
//     return e%2==0
// })
// console.log(arr2);
//return a new modified array with filtered element


//reduce - perform iteration and return a single value
//like sum of numbers, max number, min number etc
// var arr = [102,20,300,40] //1st element is accumulator and remaining elements are values
// var arr2 = arr.reduce(function(acc,val){
//     return acc+val
//     // if(val>acc){
//     //     return val
//     // }
//     // return acc
// },0) //initial value
// console.log(arr2);


// var arr = [1,2,3,4,5,6]
// var arr2 = arr.find(function(e){ //return the first matching element
//     return e==2
// })
// console.log(arr2);
