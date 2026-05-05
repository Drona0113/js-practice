
//Constructor function and prototype
/*

function CreatePencil(name,price,color,company){//constructor function
    this.name=name;
    this.price=price; //usually in a function this returns an window object.but when we add new keyword it creates an empty object and assign it to the variable pencil. so pencil is an object of CreatePencil function.
    this.color=color;
    
    this.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=color;
        document.body.append(h1);
    }
}
CreatePencil.prototype.company="Sheriyans"; //we can add properties and methods to the prototype of the constructor function. so all the objects created by the constructor function can access those properties and methods.
//it's main use is to save memory. if we add a method to the constructor function then every object created by the constructor function will have its own copy of the method. but if we add a method to the prototype of the constructor function 
// then all the objects created by the constructor function will share the same copy of the method. so it saves memory.
let pencil=new CreatePencil("Natraj",10,"Red","Natraj") // CreatePencil function was called.but when we add new beside it..it creates an blank object and assign it to the variable pencil1. so pencil1 is an object of CreatePencil function.
let pencil1=new CreatePencil("Doms",12,"Black","doms") 

//when an field of constructor was attached to prototype then we can access that field by the object of the constructor function. 
// but if we change the value of that field by the object then it will create a new field in that object and assign the new value to that field. so it will not change the value of that field in the prototype.
pencil.company="Natraj"; //if we change the value of company field by pencil object then it will create a new field in pencil object and assign the new value to that field. so it will not change the value of company field in the prototype.
//  so pencil1 object will still have the value of company field as "Sheriyans".
*/

//Classes
/*
 class CreatePencil{
    constructor(name,price,color,company){
        this.name=name;
        this.price=price; 
        this.color=color;
        this.company=company;
    }
    erase(){
        document.body.querySelectorAll("h1").forEach((elem) => {
            
            
            if(elem.style.color === this.color){
                
                elem.remove();
            }
                
        });
    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    }
 }
let p1=new CreatePencil("Natraj",10,"red","Natraj");
let p2=new CreatePencil("Doms",12,"black","Doms");
*/

//Classes with extends and super
/*
class User{
    constructor(name,address,username,email){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.role="user";
    }

    checkRole(){
         console.log(`You are a ${this.role}`);
    }
    write(text){
        
        let h1=document.createElement("h1");
        h1.textContent=`${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{//extends keyword is used to create a child class that inherits the properties and methods of the parent class. so Admin class is a child class of User class. so Admin class can access the properties and methods of User class.
    constructor(name,address,username,email){
        super(name,address,username,email); //super keyword is used to call the constructor of the parent class. so we can access the properties and methods of the parent class in the child class.
        this.role="admin";
    }

    remove(user){
        
        if(!user){
            console.error("Macha! u forgot to tell me WHICH user to remove!");
            return;
        }
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.textContent.startsWith(user.name)){
                elem.remove();
            }
    });
    }



}

let u1=new User("Drona","Vij","drona5352","drona123@mail.com");
let u2=new User("Ganesh","Vij","ghani1234","ganesh123@mail.com");
let u3=new User("Bhainadh","Gnt","bhainadh1234","bhainadh123@mail.com");
let a1=new Admin("Admin","Vij","admin1234","admin123@mail.com");

*/

//classical inheritance vs prototypal inheritance

//inheritance is a fundamental concept in object-oriented programming that allows a new class (called a child class or subclass) to inherit
//prototypal inheritance is a type of inheritance in which an object can inherit properties and methods from another object. in prototypal inheritance, objects can directly inherit from other objects.
// in classical inheritance, classes are used to create objects and the objects are created from the classes. in classical inheritance, the child class inherits from the parent class. in prototypal inheritance, the child object inherits from the parent object. in classical inheritance, the child class can override the properties and methods of the parent class. in prototypal inheritance, the child object can override the properties and methods of the parent object. in classical inheritance, the child class can have its own properties and methods. in prototypal inheritance, the child object can have its own properties and methods. in classical inheritance, the child class can have multiple parent classes. in prototypal inheritance, an object can only inherit from one parent object.

//in javascript we have prototypal inheritance. in javascript, we can create objects using constructor functions or classes. in both cases, the objects created will have a prototype that they inherit from. in constructor functions, the prototype is created automatically and the objects created will inherit from that prototype. in classes, the prototype is created automatically and the objects created will inherit from that prototype. in both cases, we can add properties and methods to the prototype and the objects created will be able to access those properties and methods.

let coffee={
    color:"dark",
    drink:function(){
        console.log("gut gut gut...");
    }
}

let arabiataCoeffe=Object.create(coffee); //Object.create() method creates a new object, using an existing object as the prototype of the newly created object. so arabiataCoeffe is an object that inherits from coffee object. so arabiataCoeffe can access the properties and methods of coffee object.
console.log(arabiataCoeffe);
arabiataCoeffe.taste="bitter";
arabiataCoeffe.drink(); //arabiataCoeffe object can access the drink method of coffee object because arabiataCoeffe object inherits from coffee object. so it can access the properties and methods of coffee object.

console.log(coffee);
console.log(arabiataCoeffe);
/*

arabiataCoeffe={...coffee}//spread operator is used to copy the properties of one object to another object. so arabiataCoeffe is a new object that has the same properties as coffee object. but arabiataCoeffe does not inherit from coffee object. so arabiataCoeffe cannot access the properties and methods of coffee object.
console.log(arabiataCoeffe);
arabiataCoeffe.taste="sweat";
console.log(arabiataCoeffe);
console.log(coffee);
*/








