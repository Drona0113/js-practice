/*
setTimeout(function(){
    console.log("hello drona");
},5000)
*/


/*
setInterval(function(){
    console.log("hello Ghani Bhaii");
},5000);
*/

/*
let tm=setTimeout(function(){
    console.log("hello");
},3000);

clearTimeout(tm);

*/

/*
let im=setInterval(function(){
    console.log("hello bondam..");
},5000);

clearInterval(im);
*/

//Counter application
/*
let count=10;

let interval=setInterval(function(){
    if(count>=0){
        
        console.log(count);
        count--;
    }
    else{
        clearInterval(interval);   
    }
},1000);
*/

//Download Simulation
let cnt=0;
let progress=document.querySelector(".progress-fill");
let percenttext=document.querySelector(".percentage");
let status=document.querySelector("#status-text");
let inter=setInterval(function(){
    if(cnt<=99){
        cnt++;
        progress.style.width=`${cnt}%`
        percenttext.textContent=`${cnt}%`
    }
    else{
        status.textContent="Download Completed!!!";
        clearInterval(inter);
    }
},100);





