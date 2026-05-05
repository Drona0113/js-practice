//scope--> where we can access a variable
//execution context--> environment where the code is executed
//global execution context--> where the code is executed first
//function execution context--> where the function is executed
/*
function abcd(){
    var a=12;
}

console.log(a); //error a is not defined
*/
//scope--global scope--> where we can access a variable anywhere in the code
//function scope--> where we can access a variable only inside the function
//block scope--> where we can access a variable only inside the block
//lexical scope--> where we can access a variable based on the location of the variable in the code


//execution context search on google to get more clarity.

// lexical scoping vs dynamic scoping
//lexical scoping--> where we can access a variable based on the location of the variable in the code
//dynamic scoping--> where we can access a variable based on the call stack

// in js we have lexical scoping and dynamic scoping is not there.
/*
function abcd(){
    let a=12;
    function defg(){
        console.log(a); //12
    }
    defg();
}
abcd();
*/
/*

let b=12;

function bcde(){
    console.log(b); //12
}

function efgh(){
    let b=13;
    bcde();
}
efgh(); //12 because of lexical scoping

*/


//closure--> a function that has access to the parent scope even after the parent function has closed.
/*
function abcd(){
    let a=12;
    return function(){
        console.log(a); //12
    };
}
let fnc=abcd();// the function abcd ends & the variable a is also removed from the memory but the inner function has access to the variable 'a'
//  because of closure,so the variable a is not removed from the memory until the inner function is not called.
*/
//closures hote hai functions jo k kisi parent fnc ke 
//andar ho aur andar waala fnc return ho raha ho,and returning 
//fnc use kare,parent fnc ka koi variable

//faayde nuksaan par
//private variables
//global pollution

/*
function countForMe(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    };
}
let count=countForMe();
count();
count();
count();

let count1=countForMe();
count1();
count1();
count1();
count1();
*/

//encapsulation--> it is a closure that is used to hide the implementation details and only expose the necessary details to the user.
/*
function clickLimiter(){
    let click=0;
    return function(){
        
        if(click<5){
            click++;
            console.log(`clicked : ${click} times`);
        }
        else{
            console.log("Limit exceeded, try after some time");

        }

}
}
//observe the difference between the two calls of clickLimiter() and the call of click() after the first call of clickLimiter().
let click=clickLimiter();
click();
click();
click();
click();
click();
click();
/*
clickLimiter()();
clickLimiter()();
*/

//Toaster

function createToaster(config) {
  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;

    document.querySelector(".parent").appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").className +=
        ` ${config.positionX === "right" ? " right-5" : " left-5"} ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }
    setTimeout(() => {
      document.querySelector(".parent").removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "light",
  duration: 3,
});
toaster("Download Done");
setTimeout(() => {
  toaster("Drona accepted your request");
}, 2000);

setTimeout(() => {
  toaster("GhaniBhaii accepted your request");
}, 4000);




