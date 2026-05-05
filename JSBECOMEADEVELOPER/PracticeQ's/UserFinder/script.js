const users = [
    {
        name:"Drona",
        pic:"https://images.unsplash.com/photo-1776798973362-c985f57c08e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        bio:"An MERN Stack Developer who learn to build applications,and an Anime Manga Artist who love to draw..."
    },
    {
        name: "Ganesh",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        bio: "Exploring the intersection of design and code. Always learning."
    },
    {
        name: "BhaiNadh",
        pic: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop",
        bio: "Focused on building scalable MERN stack applications and sleek UIs."
    },
    {
        name: "Prof Pallavi",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
        bio: "Passionate about artistic expression and digital storytelling."
    },
    {
        name: "Sanjay",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        bio: "Tech enthusiast and problem solver. Logic over everything."
    },
    {
        name: "Koundinya",
        pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        bio: "Loves minimalist aesthetics and clean, efficient code architecture."
    },
    {
        name: "Vinesh",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
        bio: "Building the future one line at a time. Coffee is my fuel."
    },
    {
        name: "Memer Yeswanth",
        pic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
        bio: "Life is a meme, I'm just the creator. Admin at the humor hub."
    },
    {
        name: "Anji",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
        bio: "Building the future one line at a time. Coffee is my fuel."
    },
];


//show all the users 
//filter the users bassed on input
// show filtered users.

function showUsers(arr){
    arr.forEach(function(user){
        // 1. Create the main card container
        const card = document.createElement('div');
        card.classList.add('card');

        // 2. Create the image
        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');
        img.alt = "User Portrait";

        // 3. Create the content wrapper
        const content = document.createElement('div');
        content.classList.add('content');

        // 4. Create the name (h3)
        const h3 = document.createElement('h3');
        h3.textContent = user.name;

        // 5. Create the bio (p)
        const p = document.createElement('p');
        p.textContent = user.bio;
        // 6. Assemble the pieces
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(content);

        // 7. Finally, add it to your page (assuming you have a div with id="container")

        document.querySelector('#container').appendChild(card);
    })
}

showUsers(users);

let inp=document.querySelector(".search-input");
inp.addEventListener("input",function(){
    let newUsers=users.filter((user)=>{
        return user.name.toLowerCase().includes(inp.value.toLowerCase());
    });
    if(newUsers.length === 0){
        document.querySelector('#container').innerHTML = `<h1 class="no-user-msg"> No user Found </h1>`; // Show "No user found" message
        return;
    }
    document.querySelector('#container').innerHTML = ""; // Clear previous results
    showUsers(newUsers);
});
