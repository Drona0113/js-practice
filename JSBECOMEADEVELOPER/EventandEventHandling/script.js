
/*

let h1=document.querySelector("h1");

h1.addEventListener("click",function() {
    h1.style.color="red";
});


//select the paragraph first
let p=document.querySelector("p");
/*element.addEventListener("event_name",function(){

});

p.addEventListener("click",function(){
    p.style.color="green";
})

function dblclick(){
    p.style.color="yellow";
};

p.addEventListener("dblclick",dblclick)

p.removeEventListener("dblclick",dblclick);

//Common Events : click,input,change,submit,mouseover,keyup

//for click event u can see from the above example.


let inp=document.querySelector("input");

inp.addEventListener("input",function(evt){
    if(evt.data !== null){
    console.log(evt.data);
    }
    //console.log("typed...");

});

//change event happens when an input textarea changes.

let sel=document.querySelector("select");


sel.addEventListener("change",function(evt){
    console.log(evt.target.value);
});

let device=document.querySelector("#device");
sel.addEventListener("change",function(evt){
    device.textContent=`${evt.target.value} Device Selected`;
});

*/

/*
let h2=document.querySelector("h2");

window.addEventListener("keydown",function(dets){
    if(dets.key===" ")
        h2.textContent="SPC";
    else
        h2.textContent=dets.key;
})


let btn=document.querySelector("#btn");

let fileinp=document.querySelector("#fileinp");

btn.addEventListener("click",function(dets){
    fileinp.click();
})

fileinp.addEventListener("change",function(dets){
    btn.textContent=dets.target?.files[0]?.name; //optional chaining.

    console.log(dets);
})
*/
//submit
/*

let form= document.querySelector("form");
let inputs=document.querySelectorAll("input");

let main=document.querySelector("#main");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    
    //console.log(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value);

    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value);

    let h3=document.createElement("h3");
    h3.textContent=inputs[1].value;
    let h5=document.createElement("h5");
    h5.textContent=inputs[2].value;
    let p=document.createElement("p");
    p.textContent=inputs[3].value;


    profile.appendChild(img);
    card.appendChild(profile);
    
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){

        if(inp.type!=="submit"){
            inp.value="";
        }
    })

});

*/

//mouseover
/*
let abcd=document.querySelector("#abcd");
abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor="orange";
});

abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor="red";
});

window.addEventListener("mousemove",function(dets){

    console.log(dets.clientX,dets.clientY);
    abcd.style.left=dets.clientX+"px";
    abcd.style.top=dets.clientY+"px";
});
*/
//Keyup and Keydown--> self prepare.

 //Event Object--> target,type,preventDefault.
 //target & preventDefault are seen in above.once check it out
/*
 abcd.addEventListener("click",function(evt){

    console.log(evt);
 });

*/

//Even bubbling and capturing--> event bubbling is the default behaviour of events in js. when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. this is called event bubbling.

//event capturing is the opposite of bubbling. when an event happens on an element, it first runs the handlers on the ancestors, then on the element itself. this is called event capturing.

/*
document.querySelector("#main1")
.addEventListener("click",function(evt){
    alert("nav clicked");
    //evt.stopPropagation(); //it will stop the event from bubbling up to the parent elements.
});

*/
/*
let ul=document.querySelector("ul");

ul.addEventListener("click",function(dets){
    //console.log(dets.target.textContent);
    //dets.target.style.textDecoration="line-through";
    dets.target.classList.toggle("lt");

});
*/

/*whenever we click on a element, it starts raise event into 2 phases:

phase-1: Capturing--> event comes from top level element to targeted element.
phase-2: Bubbling --> event raised element to parents..

whenever an event raised it should follow phase-1 then phase-2
By default phase-1(Capturing) is OFF, so whenever event raised we thought Bubbling works.

inorder to ON Capturing(phase-1) add the parameter "true" to the addEventListerner;



let a=document.querySelector(".a");
let b=document.querySelector(".b");
let c=document.querySelector(".c");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("button clicked");
});

c.addEventListener("click",function(){
    console.log("c clicked");
},true);

b.addEventListener("click",function(){
    console.log("b clicked");
});

a.addEventListener("click",function(){
    console.log("a clicked");
});


//here from the above code Capturing(phase-1) is OFF BYDEFAULT.so now it goes phase-2(Bubbling)
/*now answer will be-->
                        button clicked
                        c clicked
                        b clicked
                        a clicked
*/
/*
a.addEventListener("click",function(){
    console.log("a clicked");
},true);// Phase-1 is ON only for 'a'.
*/

/* whenever Phase-1 is ON for 'a' then it follows Capturing first then bubbling,the answer be-->
a clicked
button clicked
c clicked
b clicked


whenever Phase-1 is ON for 'c' then it follows Capturing first then Bubbling, the answer be-->
c clicked
button clicked
b clicked
a clicked

*/

let inp=document.querySelector("input")
let span=document.querySelector("span");
inp.addEventListener("input",function(){
   let left=20-inp.value.length;
   span.textContent=left;
   if(left<0)
        span.style.color="red";
    else
        span.style.color='black';
});






