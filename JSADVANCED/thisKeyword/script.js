// this keyword is special keyword that refers to the current execution context of the function in which it is used. 
// It allows you to access properties and methods of the object that is currently executing the code.
//  The value of this can change depending on how a function is called, and it can refer to different objects in different contexts.
//keywords usually use the value of it and says it's nature

// in global context, this refers to the global object (window in browsers).
//console.log(this); // window object
// in a function, this refers to the object that is calling the function.
/*
function abcd(){
    console.log(this); // window object
}
abcd()

//method--> a function that is a property of an object.
//in method, this refers to the object that is calling the method.
let obj={
    name:"John",
    age:20,
    sayName:function(){//method with ES5 syntax
        console.log(this); // obj object because the method is called by the obj object.
        console.log(this.name); // John because this refers to the obj object and obj.name is John
        console.log(this.age); // 20 because this refers to the obj object and obj.age is 20
    }
}

obj.sayName();


//event handler--> in an event handler, this refers to the element that is handling the event.
let h1=document.querySelector("h1").addEventListener("click", function(){
    console.log(this.style.color="red"); // <h1> element because the event handler is called by the <h1> element.
    //alert(this.textContent); // the text content of the <h1> element because this refers to the <h1> element and this.textContent is the text content of the <h1> element.
});


//class

class Abcd{
    constructor(){
        console.log("heyhe");
        this.a=12;
    }
}
let val=new Abcd(); // heyhe because the constructor is called when the object is created and this refers to the object that is being created and this.a is 12

// in arrow function, this refers to the parent scope of the function.

let obj1={
    name:"John",
    age:20,
    sayName:()=>{
        console.log(this);// window object because arrow function does not have its own this and it takes the this value from the parent scope(obj1) which is the global scope in this case.
        console.log(this.name); // undefined because this refers to the window object and window.name is undefined
        
        // to fix this issue, we can use a regular function instead of an arrow function.
    
    
    }
    };
obj1.sayName();



let obj2={
    name:"John",
    age:20,
    sayName:function(){
        let defg=()=>{//method with ES6 syntax
            console.log(this); // obj2 object because arrow function does not have its own this
            //  and it takes the this value from the parent scope which is the sayName function in this case and this refers to the obj2 object.
            console.log(this.name); // John because this refers to the obj2 object and obj2.name is John
        };
        defg();
        //but defg is an normal function then we get window object because normal function has its own this and it takes the this value from the global scope in this case. 

},
};
obj2.sayName();
*/

/* this keyword in different contexts:
global--->window object
function--->window object
method with es5 fnc--->object
method with es6 arrow fnc--->window object
es5 fnc inside es5 method--->window object
es6 arrow fnc inside es5 method--->object
event handler--->element
class--->blank object
*/




// this call, apply and bind are used to change the value of this in a function.
/*
let object={
    name: "Drona",
    age:20,
}

function abcd(a,b,c){
    console.log(this,a,b,c);
    console.log(this.name)
}

abcd.call(object); // {name: "Drona"} because call method is used to call the function and it takes the this value from the object that is passed as an argument.

//use apply when you want to pass an array of arguments to the function and use call when you want to pass individual arguments to the function.
abcd.apply(object,[1,2,3]);
//bind method is used to create a new function with a specific this value and it does not call the function immediately.

let fnc=abcd.bind(object,1,2);// it returns a new function with the this value set to the object and the arguments set to 1, 2, 3 but it does not call the function immediately.
fnc(); // {name: "Drona"} because the this value is set to the object and the arguments are set to 1, 2, 3

*/

let form=document.querySelector("form");
let username=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let photo=document.querySelector("#photo");

const userManager={
    users:JSON.parse(localStorage.getItem("users")) || [],
    init:function(){
         form.addEventListener("submit",this.submitForm.bind(this));
         this.renderUi();
    },
    submitForm:function(e){
        e.preventDefault();
        // Handle form submission logic here
        console.log(this);
        console.log("Form submitted!"); 
        this.addUser();
        
    },
    addUser:function(){
        this.users.push({
            username:username.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value,
        });
        this.saveAndSync();
        form.reset();
        this.renderUi();
    },

    removeUser:function(index){
        this.users.splice(index,1);
        this.saveAndSync();
        
    },

    saveAndSync:function(){
        localStorage.setItem("users",JSON.stringify(this.users));
        this.renderUi();
    },


    renderUi:function(){
        document.querySelector(".users").innerHTML="";
        this.users.forEach((user,index)=>{
            const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      //Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.className ="mt-auto px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition cursor-pointer";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = ()=>this.removeUser(index);// we are using arrow function here because we want to access the this value of the userManager object and if we use normal function then we get the this value of the button element which is not what we want.
      card.appendChild(deleteBtn);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
      
        });
    },
    

}
userManager.init();










