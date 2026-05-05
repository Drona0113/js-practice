// create new cards and store the data in local storage
//show cards from local storage
//handle buttons
//handle filters

//ALL VARIABLES AND DOC SELECTIONS


let addNote=document.querySelector("#add-note");
let closeForm=document.querySelector(".closeForm");
let formContainer=document.querySelector(".form-container");

const stack=document.querySelector(".stack");
const upBtn=document.querySelector("#upBtn");
const downBtn=document.querySelector("#downBtn");

const form = document.querySelector('form');

const imageUrlInput = form.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = form.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = form.querySelector('input[placeholder="Enter home town"]');
const purposeInput = form.querySelector('input[placeholder="e.g., Quick appointment note"]');


const categoryRadios = form.querySelectorAll('input[name="category"]');


const submitBtn = form.querySelector('.submit-btn');

//CODE STARTS HERE

function saveToLocalStorage(obj){
  //retrieve previous data of localStorage


    if(localStorage.getItem("tasks") === null){
        let oldTasks=[];
        oldTasks.push(obj);
        JSON.stringify(oldTasks)
        localStorage.setItem("tasks",JSON.stringify(oldTasks));
    }

    else{
        let oldTasks=JSON.parse(localStorage.getItem("tasks"));
        oldTasks.push(obj);
        localStorage.setItem("tasks",JSON.stringify(oldTasks));

    }
}

addNote.addEventListener("click",function(){
    formContainer.style.display="initial";

});
closeForm.addEventListener("click",function(){
    formContainer.style.display="none";

});


form.addEventListener('submit', function(evt) {
    evt.preventDefault(); // Prevent the default form submission behavior     
    const imageUrl = imageUrlInput.value;
    const fullName = fullNameInput.value;
    const homeTown = homeTownInput.value;
    const purpose = purposeInput.value;

    let selected=false;
    categoryRadios.forEach(function(cat) {
    if(cat.checked){
        selected=cat.value;
    }
    })

    if(imageUrl ===""){
        alert("Please enter a valid image URL.");
        return;
    }
    if(fullName ===""){
        alert("Please enter a valid full name.");
        return;
    }
    if(homeTown ===""){
        alert("Please enter a valid home town.");
        return;
    }
    if(purpose ===""){
        alert("Please enter a valid purpose.");
        return;
    }

    if(!selected){
        alert("Please select a category.");
        return;
    }

    saveToLocalStorage({
        imageUrl,
        fullName,
        homeTown,
        purpose,
        selected
    });

    form.reset();
    formContainer.style.display="none";
});


function showCards(){

    stack.innerHTML="";


    let allTasks=JSON.parse(localStorage.getItem("tasks"));
    allTasks.forEach(function(task){
         // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.onerror = function() {
    // 1. Set the backup image
    avatar.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBjWleqXhsudT5KjhT9nFDWTE-tQCgYYykw&s";
    // 2. THE FIX: Kill the error listener so it can't loop!
    avatar.onerror = null; 
};
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Bookings
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    // Finally, add the card to the DOM (for example, inside a container)
    document.querySelector(".stack").appendChild(card); // or any container of your choice
  
    })
}

showCards();

function updateStack(){
    const cards=document.querySelectorAll(".stack .card");
    for(let i=0;i<cards.length;i++){
        cards[i].style.zIndex=cards.length-i;
        cards[i].style.transform=`translateY(${i*10}px) scale(${1 - i*0.02})`;
        cards[i].style.opacity=`${1 - i*0.02}`;
        
    }
}

upBtn.addEventListener("click",function(){
    let lastChild=stack.lastElementChild;
    if(lastChild){
        stack.insertBefore(lastChild,stack.firstElementChild);
        //update
        updateStack();
    }
});

downBtn.addEventListener("click",function(){
    let firstChild=stack.firstElementChild;
    if(firstChild){
        stack.appendChild(firstChild);
        //update
        updateStack();
    }
});
