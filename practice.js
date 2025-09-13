// quik quiz 1

// let student = {
//     Name: "Ram",
//     'phone number': 9504395839,
//     marks: "89 out of 100"
// }

// console.log(student)

// chapter one practice set

// 1. 
// const num = "28"
// console.log(typeof num)



// chapter 2 expressions and conditionals

// 1 arithmatic operator 
// let a = 12
// let b = 6


// console.log
// (a+b,
// a-b,
// a*b ,
// a/b,
// a**b,
// a--,
// a++,
// a%b)

// 2 assignment operator

// let num1 = 20
// let num2 = 10

// = this is assignment operator which is use to assign value or 
// anything in js 

// console.log(
//     num1=2,
//     num1+=num2,
//     num1-=num2,
//     num1 *= num2,
//     num1/=num2,
//     num1%= num2,
//     num1**=num2
// )


// 3. comparison operator
// let userAge = 29
// let name = "mohan";

/* < this is less than comparison operator  */
// if(userAge<30){ 
//     console.log("hiii")
// }
// else{
//     console.log('you are not able..')
// }

// == this is equal to operator it check the value is equal or not
// if(userAge==29){
//     console.log('you are able to give vote')
// }

// != this is not equal operator

// if(userAge!=5){
//     console.log('this is not right age to be a worker')
// }

// if(userAge==="29"){
//     console.log('i am === and i am checking datatype also that is why i am getting string type')
// }
// else if (userAge=== 29){
//     console.log('this is write and its data type is also right.')
// }

/*
!== not equal value and not equal type
> greater than 
< less than 
>= greater than or eqaul to 
<= less than or equal to 
? ternaty operator 
*/


// 4. logical operator

/*
there are three logical operator 
1. && logical and 
2. || logical or 
3. ! logical not 

*/

// 6 + 2 = 8 isme 6 and 2 operands hai aur +sign operator and 8 result.

// loop in js 

// loop is used to run a task in repetitive manner when we need to run any
// thing again and again so where we use loops.


// there are 5 type of loop 

// 1. for 
// for(let i = 0; i<50; i++){
//     console.log(i+1)
// }
// 2. for in
// it is use to get key and Element
// let fruits = {
//     name1:'mango',
//     name2:'grapes',
//     name3: 'apple',
//     name4: 'banana'

// }
// for(Key in fruits){
//     console.log(key)
// } 
// 3. for of 
// this is iterable loop used for array
    // for(let name of 'praveen'){
    //     console.log(name)
    // }
// 4. while
// let b = 0;
// while(b<50){
//     console.log(b+1)
//     b++;
// }
// 5. do while
// isme code ak bar phle run hoga then hi ye condition check karega
// let a =0;
// do{
//     console.log(a)
//     a++;
// }
// while(a>5)


// functions in js 

// function is a block of code which is design to run a perticular task.

// function myFunc(parameter){

// }
// myFunc(argument)

// function sum (a,b){
     
//     console.log(a+b)
// }

// sum(3,5) //function invocation

// closures:- it is like a one outer function means a function inside a function 
// that is inner function so that inner function can know the outer function value


// function myFunc(){
// let count =0;
// function insideFunc(){
//     count++
// return count
// }

// return insideFunc
// }


// const counter = myFunc();


// console.log(counter()) //1
// console.log(counter())// 2



// ... this is called spread operator use to copy the element of array and object 

// arr = [5,2,67,1,7,9];

// const copy = {...arr}

// console.log(copy)



// local storage to store things on web browser of user local device 


// const save = document.getElementById("save");
// const show = document.getElementById("show");

// save.addEventListener("click",()=>{
//     localStorage.setItem("user","praveen");
// })

// show.addEventListener("click",()=>{
//     const get = localStorage.getItem("user")
//     document.write(`<h1 style="background-color: red;">${get}</h1>`)
// })


// how js code is executed and call stack 

var n=2;
function square (num){
    var ans = num*num;
    return ans;
}


var square2 = square(2)
var square3 = square(5)

