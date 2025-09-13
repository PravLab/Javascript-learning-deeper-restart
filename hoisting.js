// hoisting is just when you know how the execution context is working so you got it. 

// what that mean 

// when you declare a variable and give some value to it. 

console.log(x)
var x =3 

// o/p :- undefined

// why this happen?

// first you know that every code of javascript is executed in execution context 

// so that mean is first we need to understand execution context 

// 1. when the code is came in the execution context what happen 
// with this is first to reserve all the variables and functions in 
// global execution context means i.e. the memory creation phase.

// as you know in this phase assign the value to variables is undefined and 
// function is as it is stored means all the function totally stored.all

// so in the above code x variable have undefined value first when memory creation phase is.

// 2.after memory creation phase as you know all the value of variables is stored in the global execution context
// when the memory creation phase is done.

// so if you access variable at the top of your code then you got undefined because in code execution the actual value of variable stored when it execute.

// but you're accessing the value at the top of declaration that's why you got the undefined.

// remember:- 

const sayHi = ()=>{
    
}

const sayHello = function hi () {

}

var sayHi = ()=>{

}


// that all also stored in execution is undefined. 

// because that all is the variable and having value is function.

// every variable got value undefined in memory execution phase

// -> if something like a nomal function you're declaring like this below 


function sayHi(){
    console.log("hii")
}


// this is stored directly in memory creation phase as i said above every function stored as it is in global execution context.





// Note:- 
// so that's may a bit confusing only you need to know what is the execution context and how it works deeply after that you know all the things
// i hope that helps you if something fault in it just inform me so that i can learn more about it i am just learning and sharing not just copy pasting with ai.

// what was the output of this? test your self first then run that code on vs code or console 

square(n)
console.log(n)
var n= 4
function square (num){
    var ans = num*num;
    return ans;
} 


// thank you ThePraveenEffect