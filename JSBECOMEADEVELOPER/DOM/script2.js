//DOM--> Document Object Model
//DOM == Body

/*


//DOM manipulation
//first select an element from HTML
// text change
//htmll change
//css change
//attribute
//event listener change

let abcd = document.getElementById("abcd");
console.dir(abcd);
console.log(abcd);

let abc=document.getElementsByClassName("abc");// it gives array structure.
console.log(abc);

let ab=document.querySelector("h2");// here it selects starting tag of h2 element only.
console.dir(ab);

let abAll=document.querySelectorAll("h2");
console.log(abAll); // NodeList



let h1=document.querySelector("h1");
//h1.textContent="Hello Drona how r u?";--> it changes the element content
h1.innerHTML="<i>Hello Drona how r u</>";//--> it changes the inner html element
//h1.innerText="Hello Drona how r u ...";--> it changes the inner text of the element

console.dir(h1);


//Attribute Manipulation--> getAttribute,setSttribute,removeAttribute



let a=document.querySelector("a");
//a.href="https://www.twitter.com"
a.setAttribute("href","https://www.twitter.com");

let image=document.querySelector("img");
image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1775663883734-0f288d05fea3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
);




//let ag =document.querySelector("a");
//console.log(ag.getAttribute("href"));
//ag.removeAttribute("href");



//Dynamic DOM Manipulation--> createElement, appendChild.removeChild,prepend
//step-1: Create Element
//step-2: append/prepend element.

let h=document.createElement("h1");
h.textContent="Hello Ganesh Bhaii..";
//console.log(h);
document.body.append(h);// or document.querySelector("body").append(h); 
//document.body.prepend(h);// it appears before Script tag.
//h.remove();//from body 'h' was removed.

let p=document.createElement("p");
p.textContent="hey Memer...";
document.querySelector("div").appendChild(p);


//from Js we are changing the css of the element.
h.style.color="orange"; //Hello Ganesh Bhaii.. text will be in Orange color
h.style.backgroundColor="black";
//h.style.textTransform="capitalize";

//p.classList.add("hulu");
//p.classList.toggle("hulu");
//p.classList.remove("hulu");





// select all <p> elements and print their text using a loop.

let ps=document.querySelectorAll("p");

ps.forEach(function(val){
    console.dir(val.textContent);
})


for(let i=0;i<ps.length;i++){
    console.log(ps[i].textContent);
}

//select a paragraph and replace it content with:

   { <b>Updated</b> by JavaScript }


let p_update=document.querySelector(".p_update");
p.innerHTML="<b>Updated</b> by JavaScript";



// apply hulu class to the even <li> in <ul>

let even_li=document.querySelectorAll("ul li:nth-child(2n)");
even_li.forEach(function(val){
    val.classList.add("hulu");
});


*/


