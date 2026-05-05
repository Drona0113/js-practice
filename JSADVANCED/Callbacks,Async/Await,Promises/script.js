//koi bhi code js mein line by line chalega aur ye natural
//pattern bhi hota hai ki code line by line chale,but
//kabhi kabaar aise cases aate hai life mein jaha par aapka
//code wait krta hai and utni der mein agla code chal jaata hai
/*
console.log("hey1")
console.log("hey2")
setTimeout(()=>{
    console.log("hey3")
},2000)
console.log("hey4")
*/


//Sync and Async code

//Sync code is a code that runs line by line and it waits for the previous line to finish before it runs the next line. 
// Async code is a code that runs in the background and it does not wait for the previous line to finish before it runs the next line. 
// Async code is used to perform tasks that take time to complete, such as fetching data from an API or reading a file from the disk. 
// Async code is also used to perform tasks that are not dependent on the previous line, such as event listeners or timers.
//  Async code is also used to improve the performance of the application by allowing multiple tasks to run simultaneously.

//Callbacks, Promises and Async/Await are the three ways to handle async code in JavaScript.
//  Callbacks are the oldest way to handle async code in JavaScript.
//  Promises are a newer way to handle async code in JavaScript.
//  Async/Await is the newest way to handle async code in JavaScript. 
// Callbacks are functions that are passed as arguments to other functions and they are called when the async task is completed. 
// Promises are objects that represent the eventual completion or failure of an async task and they have a then method that is called when the async task is completed. 
// Async/Await is a syntactic sugar that makes it easier to write async code by allowing you to write async code in a synchronous manner. Async/Await is built on top of Promises and it uses Promises under the hood.
/*
function kuchhDerBaadChalunga(fnc){
    setTimeout(fnc,(Math.floor(Math.random()*10))*1000)
}

kuchhDerBaadChalunga(function(){//callback fnc
    console.log("hey");
})
*/
//Callback hell
/*
function profileFetch(username,cb){
    console.log("Fetching profile data...");
    setTimeout(()=>{
        cb({_id:"123",username, age:20,email:"drona123@gmail.com"});
    },2000)
}

function fetchPosts(id,cb){
    console.log("Fetching all posts...");
    setTimeout(()=>{
        cb({_id:id,posts:["hola","hello","world shall know pain"]});
    },3000)
}

function fetchSavedPosts(id,cb){
    console.log("Fetching saved posts..")
    setTimeout(()=>{
        cb({_id:id,saved:[1,2,3,44,45,321]});
    },3000);
};
profileFetch("Drona",function(data){
    console.log(data);
    fetchPosts(data._id,function(posts){
        console.log(posts);
        fetchSavedPosts(data._id,function(saved){
            console.log(saved)
        })
        
    })
});

*/

//Promises, it has 3 stages--> pending,fullfilled,rejected
/*
let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("Resolved with "+rn); 
        else rej("Rejected with "+rn);
       
    },3000);
});

pr.then(function(val){// then is used to handle res(resolve) in promise
    console.log(val);
});

pr.catch(function(val){// catch is used to handle rej(reject) in promise
    console.log(val);
})


*/

//Async Await
/*
let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res("Resolved with "+rn); 
        else rej("Rejected with "+rn);
       
    },2000);
});

async function abcd(){
    try{// in promise if it resolve then it comes to try block otherwise reject then comes to catch
        let val=await pr;// in val orginally it stores both resolve and reject but when we write in try block it takes only resolve.
        console.log(val);
    }
    catch(err){
        console.log(err);

    }
    
}

abcd()

*/










