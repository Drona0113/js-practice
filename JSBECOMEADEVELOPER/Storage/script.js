//localStorage--> the data will be stored in browser eventhough the browser will be closed ,
// data stored in browser won't deleted.


//sessionStorage--> here the data is store temporarly that is when the tab closes we lose the data.

//cookies--> this also store data. our data will be saved on browser in the name of cookie property.
// it handles small data but stores like localStorage.

/* localStorage: ~5Mb data store
steps:
how to store data?-- setItem--> if value not there then i displays the given val 
                                but if there is value in localStorage then it overrides the value.
how to fetch data?-- getItem
how to remove data?-- removeItem
how to update data?-- 
*/

/*

localStorage.setItem("name","drona");

let val=localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.setItem("name","drona");
localStorage.setItem("name","Gopinadh")

*/

//sessionStorage--> same steps as localStorage

/*
//cookies--> ~4Kb
console.log(document.cookie="email=drona@gmail.com");



//localStorage save data in the form of Strings eventhough when u give arrays,obj,etc

localStorage.setItem("friends",{one: "bhai",two:"ghani"});

localStorage.setItem("places",["vij","gnt","mgl"]);

localStorage.clear();

localStorage.setItem("friends",JSON.stringify(["ghani","bhai","sanjay"]));

//but when we use JSON.stringify() method it gives as we provided.

localStorage.getItem("friends"); // it returns the array in string format

JSON.parse(localStorage.getItem("friends"));//it returns array.
*/



function applyTheme(theme){
    document.body.classList.remove("dark","light");
    document.body.classList.add(theme);
}

function getSystemTheme(){
    return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setInitialTheme(){
    const savedTheme=localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());

}

setInitialTheme();

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change",()=>{
        if(!localStorage.getItem("theme")){
            applyTheme(getSystemTheme());
        }
    })

document.querySelector("button").addEventListener("click",()=>{
    const currentTheme=document.body.classList.contains("dark")
    ? "dark"
    : "light";
    const newTheme=currentTheme ==="dark"? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme",newTheme);
})





