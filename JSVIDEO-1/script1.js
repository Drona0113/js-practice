//Loops practice

/*for(let i=1;i<11;i++){
    console.log(i);

}


let i=10;
while(i>0){
    console.log(i);
    i--;
}



for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}


let i=1;
while(i<=15){
    if(i%2===1){
        console.log(i);
    }
    i++;
}


let sum=0;
for(let i=1;i<101;i++){
    sum=sum+i;
    
}
console.log(sum);


for(let i=1;i<101;i++){
    if(i%7===0){
        break;
    }
    console.log(i);
}
*/

//functions
/*
function add(v1,v2){
    console.log(v1,v2); //undefined undefined
}
add();

function add(v1,v2){
    console.log(v1+v2); //NaN
}
add();


function add(v1=0,v2=0){
    console.log(v1+v2); //0
}
add();


function add(v1=0,v2=0){ // default parameters
    console.log(v1+v2); //30
}
add(10,20);


 //rest operator

function abcd(...val){ // rest operator
    console.log(val); // [1,2,3,4,5]
}
abcd(1,2,3,4,5);


function abcd(a,b,...val){ // rest operator should be at the end of the parameter list and it will collect all the remaining arguments
//  into an array. 
    console.log(a,b); // 1 2
    console.log(val); // [3,4,5] here the rest operated values return in Array format.
    console.log(a,b,val); // 1 2 [3,4,5]
}
abcd(1,2,3,4,5);
*/

//Return values and Early returns
/*
 function abcd(v){
    return 12+v;
 }
 let val=abcd(10);
 console.log(val); //22
 */

 //first class functions--> functions are treated as first class citizens in JavaScript. They can be assigned to variables, 
 // passed as arguments to other functions, and returned from functions.
 /*
 function abcd(val){
    val();
 }
 abcd(function(){
    console.log("Hello World");
 });
 */

 //higher order functions--> A higher-order function is a function that takes one or more functions as parameters, or
 //  returns a function as its result.
 /*
 function abcd(){
    return function(){
        console.log("Hey he..he...");
    }
 }
 abcd()();// here abcd() will return the inner function and then we are invoking it with () to execute the inner function.  
 */

 //pure vs impure functions
 /*
 let a=12;
 function abcd(){
    console.log("hehhehe");
 };

 abcd();// here the function is pure because it does not modify any external state and always produces the same output for the same input.

 function hui(){
    a++;
    console.log(a); //13
 };
 hui();// here the function is impure because it modifies the external variable 'a' and produces different output each time it is called.
*/

// closures--> A closure is a function that has access to its own scope, the outer function's scope, and the global scope. 
// It allows a function to access variables from an enclosing scope even after it leaves the scope in which it was declared.
/*
function abcd(){
    let a=12;
    return function(){
        console.log(a); //12
    }
}
abcd()(); // here the inner function has access to the variable 'a' from the outer function's scope, even after the outer function has
//  finished executing. This is an example of a closure. 
*/

//lexical scoping--> Lexical scoping refers to the fact that in JavaScript, the scope of a variable is determined by its position in the source
//  code. A function can access variables that are defined in its own scope, as well as variables that are defined in any outer scopes. 
// This is because JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the source
//  code, and nested functions have access to variables declared in their outer scope.
/*
function abcd(){
    let a=12;
    function xyz(){
        let b=13;
        function pqr(){
            let c=14;
        }
    }
}
*/

// Immediately Invoked Function Expression (IIFE)--> An IIFE is a function that is defined and immediately invoked.
//  It is often used to create a new scope and avoid polluting the global namespace.
/*
(function(){
    console.log("This is an IIFE");
})();
*/

//Hoisting--> Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope 
//during the compilation phase. This means that you can use variables and functions before they are declared in the code.
// However, only the declarations are hoisted, not the initializations.
/*
abcd(); // here we can call the function before its declaration because of hoisting.

function abcd(){
    console.log("heyhyehee");
};

*/
/*
abcd()// here we cannot call the function before its declaration because we are using function expression and not function declaration.

let abcd=function(){
    console.log("heyhyehee");// here we are using function expression and not function declaration, so we cannot call the function before its declaration because of hoisting.
    // we get uncaught reference error because the variable 'abcd' is not defined at the time of the function call.
};

*/

//Practice problems of Functions.

//Use rest parameter to accept any number of scores and return the total
/*
function getScore(...scores){
    let total=0;
    scores.forEach(function(score){
        total+=score;   
    });
    return total;
}
console.log(getScore(10,20,30,40,50)); // here we are passing 5 scores to the function and it will return the total of those scores.
*/


/*
function abcd(val){
    val();
}
abcd(function(){
    console.log("Hhe heh..he..");
});
*/

//BMI Calculator
/*
function bmi(weight,height){
    return weight/(height*height);
}
console.log(bmi(94,1.73).toFixed(2));
*/

//discount calculator
/*
function discountCalculator(discount){
    return function(price){
        return price-(price*discount/100);
    };
}
console.log(discountCalculator(10)(1200)); // here we are passing the discount percentage and the price to the function and it will return the discounted price.  
let ten=discountCalculator(10);
console.log(ten(1000)); // here we are passing the price to the function and it will return the discounted price.
*/


 //Arrays.
 //In Javascript, an array is a data structure that can hold a collection of values. It is a special type of object that allows you to store multiple values in a single variable.
//  Arrays can hold values of any type, including numbers, strings, objects, and even other arrays. They are ordered, meaning that the values are stored in a specific sequence and can be accessed using their index. 
//  The index of an array starts at 0, so the first element is at index 0, the second element is at index 1, and so on.

/*
let arr=[];
let a=new Array(); // both are same and create an empty array.
*/
//Array meethods:
//Push, pop,shift, unshift, indexOf, lastIndexOf, includes, slice, splice, forEach, map, filter, reduce, sort, reverse, join, split,find,some,every
let a1=[1,2,3,4,5];
a1.push(6); // [1,2,3,4,5,6]

a1.pop();// [1,2,3,4,5]

a1.shift(); // [2,3,4,5]

a1.unshift(1); // [1,2,3,4,5]
a1.unshift(0); // [0,1,2,3,4,5]
a1.shift(); // [1,2,3,4,5]

a1.indexOf(3); // 2

a1.lastIndexOf(3); // 2

a1.includes(3); // true

console.log(a1);// [1,2,3,4,5]

a1.splice(2,1); // [1,2,4,5] here we are removing the element at index 2 which is 3.Here 1 is no of elements to be removed.
a1.splice(2,2); // [1,2] here we are removing the elements at index 2 and 3 which are 4 and 5.Here 2 is no of elements to be removed.

a1.splice(2,0,3,4,5); // [1,2,3,4,5] here we are adding the elements 3,4 and 5 at index 2 without removing any element.Here 0 is no of elements to be removed.

//slice--> slice method is used to create a new array by extracting a portion of an existing array. It takes two parameters, the starting index and the ending index (exclusive).
a1.slice(2,4); // [3,4] here we are extracting the elements from index 2 to index 3 (4 is exclusive) which are 3 and 4.

console.log(a1); // [1,2,3,4,5] here the original array is not modified because slice method returns a new array and does not modify the original array.

a1.reverse(); // [5,4,3,2,1] here we are reversing the original array and it modifies the original array.

let a2=[11,2,45,31,5];
a2.sort(); // [11,2,31,45,5] here we are sorting the original array in ascending order and it modifies the original array. But it is not sorting the numbers in correct order because it is sorting the numbers as strings. 
// To sort the numbers in correct order we can use a compare function as a parameter to the sort method.
let asc=a2.sort(function(a,b){
    return a-b;
}); // [2,5,11,31,45] here we are sorting the original array in ascending order and it modifies the original array.

let d=a2.slice().sort(function(a,b){
    return b-a;
}); // [45,31,11,5,2] here we are sorting the original array in descending order and it modifies the original array.

let arr=[11,62,3,4,25];

arr.forEach(function(val){
    console.log(val); // here we are printing each element of the array using forEach method.
})

//map method is used to create a new array by applying a function to each element of an existing array. It takes a function as a parameter and returns a new array with the results of calling the function on every element in the original array.

console.log(arr.map(function(){
    return 12;
}))// [12,12,12,12,12] here we are creating a new array with the value 12 for each element of the original array.

//for map method return statement is mandatory because it is used to create a new array with the results of calling the function on every element in the original array.
 //If we do not return anything from the function, then the new array will be filled with undefined values.

 let newarr=arr.map(function(val){
    if(val>10) return val; // here we are creating a new array with the value 12 for each element of the original array.
    });
console.log(newarr); // [11,62,undefined,undefined,25] here we are creating a new array with the value of the element if it is greater than 10 and undefined if it is less than or equal to 10.
 
// filter method is used to create a new array with all elements that pass the test implemented by the provided function.
//  It takes a function as a parameter and returns a new array with the elements that pass the test.

console.log(arr);// [11,62,3,4,25]

 console.log(arr.filter(function(val){
    if (val>10) return val; // here we are creating a new array with the value of the element if it is greater than 10 and undefined if it is less than or equal to 10.
}));

let aa=[1,2,3,4,5,6];
//reduce method is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//  It takes a function as a parameter and returns a single value that is the result of the reduction.
console.log(aa.reduce(function(acc,val){
    return acc+val; // here we are adding each element of the array to the accumulator and returning the final result which is the sum of all elements in the array.
},0)); // 21. Here 0 is the initial value of the accumulator.
//here every time the return value becomes the new value of the acc for next iteration.


let ar=[
    {id:1,key:1},
    {id:2,key:2},
    {id:3,key:1},
];
let va=arr.find(function(val){
    return val.key===1; // here we are finding the first element in the array that has the key value of 1 and returning that element.
});
console.log(va); // {id:1,key:1}

// find method is used to find the first element in the array that satisfies the provided testing function. It takes a function as a parameter and returns the value of the first element in the array that satisfies the testing function. If no elements satisfy the testing function, it returns undefined.

aa=[1,2,3,4,5,6];
console.log(aa.some(function(val){
    return val>4; // here we are checking if there is any element in the array that is greater than 4 and returning true if there is at least one element that satisfies the condition.
}));

console.log(aa.every(function(val){
    return val>0; // here we are checking if every element in the array is greater than 0 and returning true if all elements satisfy the condition.
}
));

console.log(aa.every(function(val){
    return val>4; // here we are checking if every element in the array is greater than 4 and returning true if all elements satisfy the condition. 

}));// false because not all elements in the array are greater than 4.

//destructuring of arrays--> Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays. It can be used to unpack values from arrays, or properties from objects, into distinct variables.
let arr1=[1,2,3,4,5];
let [a,b,c,,e]=arr1;

arr1=[1,2,3,4,5];
let arr2=[...arr1]; 
console.log(arr2); // [1,2,3,4,5] here we are creating a new array by copying the elements of the original array using spread operator.

console.log(arr2.pop()); // [1,2,3,4] here we are removing the last element of the new array and it does not affect the original array.
console.log(arr2);
console.log(arr1); // [1,2,3,4,5] here the original array is not modified because we created a new array using spread operator and it does not affect the original array.




//sort this array alphabetically and then reverse it
let names=["Zara","Arjun","Mira","Bhavya"];
names.sort().reverse();


//Use .map() to square each number;
let num=[1,2,3,4,5];
let squared=num.map(function(val){
    return val*val; // here we are creating a new array with the value of the element squared if it is greater than 2 and undefined if it is less than or equal to 2.
});
 
//Use .filter() to keep numbers greater than 2;
let filtered=num.filter(function(val){
    return val>2;
});

// Use .reduce() to find the sum of array.
let sum=num.reduce((acc,val)=>{
    return acc+val;
},0);

//use .some() to  check if any student has scored below 35:
let students=[45,60,28,90];
console.log(students.some(function(val){
    return val<35; //true
}));

// Destrcture this array to get firstName and lastName
let fullName=["Drona","Venkata","Sai","Gopinadh"];
let [firstName, , ,lastName]=fullName;

//Merge 2 arrays using spread operator:
let one=[1,2,3];
let two=[4,5,6];
let merged=[...one,...two]; // [1,2,3,4,5,6] here we are merging the two arrays using spread operator and creating a new array with the elements of both arrays.


//Objects
let obj={
    name:"Drona",
    age: 21,
    city:"Vijayawada",
};
obj.age; // 21 here we are accessing the age property of the object using dot notation.

obj["city"]; // "Vijayawada" here we are accessing the city property of the object using bracket notation.


let ab=["name"];
obj.ab; // undefined here we are trying to access the property of the object using a variable and it returns undefined because it is looking for a property with the name "ab" which does not exist in the object.

obj[ab]; // "Drona" here we are accessing the property of the object using a variable and it returns the value of the property "name" which is "Drona".
// why obj.ab works as undefined and obj[ab] works as "Drona" because in the first case we are trying to access the property of the object using dot notation and it is looking for a property with the name "ab" which does not exist in the object.
//  In the second case we are trying to access the property of the object using bracket notation and it is looking for a property with the name "name" which exists in the object and returns its value which is "Drona".


//nesting and deep access
const user={
    name:"Drona",
    address:{
        city:"Vijayawada",
        state:"Andhra Pradesh",
        pin:520012,
        location:{
            lat:16.5062,
            long:80.6480,
        },
    },
};

user.address.location.lat; // 16.5062 here we are accessing the lat property of the location object which is nested inside the address object of the user object.

//destructuring of objects
const {name, address:{city, state}}=user; // here we are destructuring the user object to get the name, city and state properties and creating new variables with the same names as the properties.

let {lat,long}=user.address.location; // here we are destructuring the location object to get the lat and long properties and creating new variables with the same names as the properties.

//Looping through objects

let obj1={
    name:"Drona",
    age:21,
    email:"drona@example.com",
};

for(let key in obj1){
    //console.log(key);
    console.log(key + ": " + obj1[key]);
}

Object.keys(obj1);// ["name","age","email"] here we are getting an array of keys of the object using Object.keys() method.

Object.values(obj1); // ["Drona",21,"drona@example.com"] here we are getting an array of values of the object using Object.values() method. 

Object.entries(obj1); // [["name","Drona"],["age",21],["email","drona@example.com"]] here we are getting an array of key-value pairs of the object using Object.entries() method.


let obj2={...obj1}; // here we are creating a new object by copying the properties of the original object using spread operator.
console.log(obj2); // {name:"Drona", age:21, email:"

let obj3=Object.assign({},obj1); // here we are creating a new object by copying the properties of the original object using Object.assign() method.
 obj3=Object.assign({city:"Vijayawada"},obj1); // here we are creating a new object by copying the properties of the original object and adding a new property city using Object.assign() method.


 //deep clone of an object--> A deep clone of an object is a new object that is a copy of the original object, including all nested objects and arrays. It is created by recursively copying all properties of the original object and its nested objects and arrays.

 let obj4={
    name:"Drona",
    age:21,
    email:"drona@example.com",
    address:{
        city:"Vijayawada",
        state:"Andhra Pradesh",
    },
 };

 let obj5={...obj4}; //using spread operator
 obj5.address.city="Hyderabad"; // here we are modifying the nested object in the new object and it also modifies the nested object in the original object because it is a shallow clone of the original object.

//when the nested objects are copied using spread operator or Object.assign() method, they are not deeply cloned. Instead, they are copied by reference, which means that both the original and the new object will point to the same nested object in memory. 
//Therefore, when we modify the nested object in the new object, it also modifies the nested object in the original object.

JSON.stringify(obj4); // here we are converting the object to a JSON string and it creates a new string that is a copy of the original object.

JSON.parse(JSON.stringify(obj4)); // here we are converting the JSON string back to an object and it creates a new object that is a deep clone of the original object. This method is a common way to create a deep clone of an object in JavaScript, but it has some limitations such as it does not work with functions, undefined values, and circular references.

let obj6=JSON.parse(JSON.stringify(obj4)); // here we are creating a new object that is a deep clone of the original object using JSON.stringify() and JSON.parse() methods.
obj6.address.city="Mangalagiri"; // here we are modifying the nested object in the new object and it does not affect the original object because it is a deep clone of the original object.


//computed property names in objects--> Computed property names allow you to use an expression as the name of a property in an object literal. The expression is evaluated and the result is used as the property name.

let role="admin";

let object={
    name:"Drona",
    age:21,
    email:"drona@example.com",
    address:{
        city:"Vijayawada",
        state:"Andhra Pradesh",
    },
    [role]:"Drona",
     // here we are using a computed property name to create a property with the name "admin" and the value "admin".
};


//Practice Q's
// Create an obj fora student with name,age,and isEnrolled.

let student={
    name:"Drona",
    age:21,
    isEnrolled:true,
};

//Can an obj key be a number or boolean?

const objkey={
    true:"yes",
    42:"answer",
};
console.log(objkey[true]); // "yes" here we are accessing the property of the object using a boolean key and it returns the value of that property.
console.log(objkey[42]); // "answer" here we are accessing the property of the object using a number key and it returns the value of that property.


//Destructure the key "second-name" as a variable called secondName.

const nameObj={
    "second-name":"Gopinadh",
};

let {"second-name":secondName}=nameObj; // here we are destructuring the object to get the value of the property "second-name" and creating a new variable called secondName to store that value.

// Use for-in loop to log all keys in this obj
 const course={
    title:"JavaScript",
    duration:"4 weeks",
 };
 for(let key in course){
    console.log(key); // here we are logging all the keys of the object using for-in loop.
 }

// Use Object.entries() to print all key-value pairs as:
//title: JavaScript
//duration: 4 weeks

Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]); // here we are logging all the key-value pairs of the object using Object.entries() method and forEach loop.
});


const m={score:90};
const n=m;
n.score=50;
console.log(m.score); // 50 here we are modifying the score property of the object n and it also modifies the score property of the object m because both m and n are referencing the same object in memory.


